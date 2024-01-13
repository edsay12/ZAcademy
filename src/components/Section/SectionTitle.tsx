import { ThemeConfig } from "tailwindcss/types/config";

type PropTypes = {
  firstTextColor: string
  secondTextColor?: string
  firstText: string;
  secondText: string;
};

function SessionTitle({
  firstTextColor = "text-black",
  secondTextColor= " text-yellow-700",
  firstText,
  secondText,
}: PropTypes) {
  return (
    <h1 className={`${firstTextColor} font-extrabold text-2xl `}>
      {firstText}
      {" "}
      <span className={`${secondTextColor}`}>{secondText}</span>
    </h1>
  );
}

export default SessionTitle;
