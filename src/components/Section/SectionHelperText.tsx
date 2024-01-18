import { ThemeConfig } from "tailwindcss/types/config";

type PropTypes = {
  text:string
  textPosition?:string
  textColor?:string
  
};

function SectionHelperText({
  text,
  textPosition,
  textColor
}: PropTypes) {
  return (
    <p className={`${textPosition} ${textColor}  -mt-8`}>{text}</p>
  );
}

export default SectionHelperText;
