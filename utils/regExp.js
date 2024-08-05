export const ccNameCheck = (input) => {
  const text = new RegExp();
  return text.test(input);
};

// 특수문자 외 모든문자 허용
export const nameCheck = (input) => {
  const text = new RegExp(/^[\p{L}0-9\s]*$/u);

  return text.test(input);
};

// 한글 입력제외.
// 영문, 숫자, 사용 가능 특수문자(@, ., -, _, +)만 허용.
// @와 . 은 무조건 포함
export const emailValidationCheck = (input) => {
  const text = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  return text.test(input);
};

export const emailLanguageCheck = (input) => {
  const text = new RegExp(/^[a-zA-Z0-9@._\-+]+$/);

  return text.test(input);
};
