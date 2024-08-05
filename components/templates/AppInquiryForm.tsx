import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useByte } from '@/hooks/useByte';
// import { appInquiry } from '@/api/inquiry';

import InputField from '@/components/molecules/InputField';
// import BaseTextField from '@/components/common/BaseTextField';
// import BaseDropDown from '@/components/common/BaseDropDown';

// import TermsPrivacyPolicyModal from '@/components/modal/TermsPrivacyPolicyModal';
// import { countryList, appInterestList } from '@/constants/inquireFormList';
import { nameCheck, emailValidationCheck, emailLanguageCheck } from '@/utils/regExp';

const InquireForm = () => {
  // const router = useRouter();
  const [byte, setByte] = useState(0);
  const [reCheckNumber, setReCheckNumber] = useState(false);

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  // 국가 코드 관련 변수들
  const [countryValue, setCountryValue] = useState('');
  const [countryNumber, setCountryNumber] = useState(0);
  const [contactNumberValue, setContactNumberValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // 이메일 관련 변수들
  const [emailValue, setEmailValue] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [interestValue, setInterestValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  // 팝업 관련 변수들
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const apiPostInquiry = async () => {
  //   const postData = {
  //     firstName: firstNameValue,
  //     lastName: lastNameValue,
  //     email: emailValue,
  //     country: countryValue,
  //     contactNumber:
  //       countryValue === 'Other'
  //         ? contactNumberValue
  //         : `${countryNumber} ${contactNumberValue}`,
  //     interest: interestValue,
  //     message: messageValue,
  //     isAgreePersonalInfo: isPrivacyChecked,
  //     isAgreeSubscribe: isSubscribe,
  //   };

  //   setIsSubmit(true);

  //   if (isEmailError) {
  //     return;
  //   }

  //   if (typeof countryNumber === 'string') {
  //     setContactNumberValue(countryNumber.replace(/[^0-9]/g, ''));
  //   }

  //   try {
  //     await appInquiry(postData);
  //     router.push('/contact-us/complete');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const isPrivacyOpenClick = () => {
    setIsPrivacyOpen(true);
    setIsModalOpen(true);
  };

  const isDisabledSubmit = !(
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    countryValue &&
    interestValue &&
    contactNumberValue &&
    isPrivacyChecked &&
    countryNumber &&
    !reCheckNumber
  );

  // 메시지 유효성 검사에 대한 로직(공통 input에 해당되지 않아서 별도로 빼둠)
  // const { getByteLength } = useByte();

  // const onInput = (e) => {
  //   let inputText = e.target.value;
  //   const currentByteLength = getByteLength(inputText);

  //   setByte(currentByteLength);

  //   if (currentByteLength > 1000) {
  //     while (getByteLength(inputText) > 1000) {
  //       inputText = inputText.slice(0, -1); // 1글자씩 제거
  //     }
  //     e.target.value = inputText;
  //     setByte(1000);
  //   }
  // };

  // useEffect(() => {
  //   setSelectedCountry(countryValue);

  //   if (countryValue !== 'Other') {
  //     setCountryNumber(countryList[countryValue]);
  //   }
  // }, [countryValue]);

  // useEffect(() => {
  //   if (countryValue === 'Other') {
  //     setCountryNumber(contactNumberValue.split(' ')[0]);

  //     /* 국가번호를 더해서 보내주기 때문에 contactNumberValue가 other일 때 빈값이 되지 않아 로직 추가 함 */
  //     const checkNumber = contactNumberValue.split(' ')[1];

  //     setReCheckNumber(!checkNumber);
  //   }
  // }, [contactNumberValue]);

  // 이메일 유효성 검사 체크하는 로직
  useEffect(() => {
    setIsEmailError(!emailValidationCheck(emailValue));
  }, [emailValue]);

  // 체크박스 체크 관련 로직
  useEffect(() => {
    if (isAllChecked) {
      setIsPrivacyChecked(true);
      setIsSubscribe(true);
    } else if (isPrivacyChecked && isSubscribe && !isAllChecked) {
      setIsPrivacyChecked(false);
      setIsSubscribe(false);
    }
  }, [isAllChecked]);

  useEffect(() => {
    setIsAllChecked(isPrivacyChecked && isSubscribe);
  }, [isPrivacyChecked, isSubscribe]);

  return (
    <div className="contactus-form-section-01 contact-us-group">
      <div className="contents-line-box">
        <div className="contactus-box">
          <div className="form-group input-type-text row">
            <div className="pr-6 flex-1">
              <InputField
                label="First Name"
                id='firstname'
                required
                onChange={(e) => setFirstNameValue(e.target.value)}
                limit= {20}
              />
            </div>
            <div className="pr-6 flex-1">
              <InputField
                label="Last Name"
                id='lastname'
                required
                onChange={(e) => setLastNameValue(e.target.value)}
                limit= {20}
              />
            </div>
          </div>

          <div className="dp-f flex-wrap mt-30 gap-16">
            <div style={{ flexGrow: 1 }} className="mb-12">
              <InputField
                label="Country"
                id='country'
                limit= {20}
                onChange={(e) => setCountryValue(e.target.value)}
                required
              />
            </div>

            <div style={{ flexGrow: 9 }}>
              <InputField
                label="Contact Number"
                id='country number'
                required
                onChange={(e) => setContactNumberValue(e.target.value)}
                limit= {20}
                disabled={!countryValue}
              />
            </div>
          </div>

          <InputField
            label="E-mail Address"
            id='e-mail address'
            required
            limit= {20}
            onChange={(e) => setEmailValue(e.target.value)}
            error={true}
          />

          <InputField
            label="Interested in"
            id='interested in'
            required
            limit= {20}
            onChange={(e) => setInterestValue(e.target.value)}
          />

          <div className="form-group input-type-textArea mt-30">
            <label>Message</label>
            <div className="textarea-group">
              <textarea
                className="hp-175"
                value={messageValue}
                maxLength={1000}
                placeholder="The more detailed inquiry, the more accurate answer can be provided."
              ></textarea>
            </div>
            <div className="dp-f mt-8">
              <span className="ml-at fs-14">{byte}/1000</span>
            </div>
          </div>

          <div className="mt-30 contactus-Agreement">
            <div className="dp-f align-items-start bg-f8f8f8 pa-14 bdr-10">
              <div className="pr-10">
                <div className="checkbox-group">
                  <div className="check-box">
                    <label>
                      <input
                        type="checkbox"
                        className="check-item"
                        value=""
                        checked={isAllChecked}
                        onChange={(e) => setIsAllChecked(e.target.checked)}
                      />
                      <span className="check-icon">
                        <i className="ic-check"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="l-p">I agree to all</p>
              </div>
            </div>

            <div className="dp-f align-items-start mt-20">
              <div className="pr-10">
                <div className="checkbox-group">
                  <div className="check-box">
                    <label>
                      <input
                        type="checkbox"
                        className="check-item"
                        value=""
                        checked={isPrivacyChecked}
                        onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                      />
                      <span className="check-icon">
                        <i className="ic-check"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="l-p">I agree to the Privacy Policy</p>
                <p className="s-p text-underline" onClick={isPrivacyOpenClick}>
                  View
                </p>
              </div>
            </div>

            <div className="dp-f align-items-start mt-20">
              <div className="pr-10">
                <div className="checkbox-group">
                  <div className="check-box">
                    <label>
                      <input
                        type="checkbox"
                        className="check-item"
                        value=""
                        checked={isSubscribe}
                        onChange={(e) => setIsSubscribe(e.target.checked)}
                      />
                      <span className="check-icon">
                        <i className="ic-check"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="l-p">Subscribe to newsletter</p>
              </div>
            </div>

            <button
              className="button-common primary size-100 hp-69 mt-40"
              disabled={isDisabledSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <TermsPrivacyPolicyModal isOpen={isModalOpen} modalType="Privacy Policy" /> */}
    </div>
  );
};

export default InquireForm;
