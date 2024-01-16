import { ThemeConfig } from "tailwindcss/types/config";

type PropTypes = {
  firstTextColor: string
  secondTextColor?: string
  firstText: string;
  textPosition?:string
  secondText: string;
  thirthText?:string;
};

function SectionTitle({
  firstTextColor = "text-black",
  secondTextColor= " text-yellow-700",
  firstText,
  textPosition,
  thirthText,
  secondText,
}: PropTypes) {
  return (
    <h1 className={`${firstTextColor} ${textPosition} font-extrabold text-2xl `}>
      {firstText}
      {" "}
      <span className={`${secondTextColor}`}>{secondText}</span>
      {" "}
      <span className={`${firstTextColor}`}>{thirthText}</span>
    </h1>
  );
}

export default SectionTitle;
