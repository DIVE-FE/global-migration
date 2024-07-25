interface CountryImageSlotProps {
  countryCode: "EN" | "VN" | "TH" | "ID" | "CN" | "TW";
  className?: string;
  style?: React.CSSProperties;
}

const CountryImageSlot: React.FC<CountryImageSlotProps> = ({
  countryCode,
  className,
  style,
}) => {
  const imageUrl = getImageUrl(countryCode);
  const imageAlt = getAlt(countryCode);
  return (
    <img className={className} style={style} src={imageUrl} alt={imageAlt} />
  );
};

const getImageUrl = (countryCode: string) => {
  switch (countryCode) {
    case "EN":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_en.png";
    case "VN":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_ti.png";
    case "TH":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_vn.png";
    case "ID":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_id.png";
    case "CN":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_cn.png";
    case "TW":
      return "https://image.smartscore.kr/smartscore_gloabl/icon/ic_tw.png";
    default:
      return "";
  }
}

const getAlt = (countryCode: string) => {
  switch (countryCode) {
    case "EN":
      return "Flag of United State Of America";
    case "VN":
      return "Flag of North Vietnam";
    case "TH":
      return "Flag of Thailand";
    case "ID":
      return "Flag of Republic of Indonesia";
    case "CN":
      return "Flag of China";
    case "TW":
      return "Flag of Taiwan";
    default:
      return "Not Found Image";
  }
}

export default CountryImageSlot;
