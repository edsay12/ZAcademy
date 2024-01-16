import { ThemeConfig } from "tailwindcss/types/config";

type PropTypes = {
  text:string
  textPosition?:string
  
};

function SectionHelperText({
  text,
  textPosition
}: PropTypes) {
  return (
    <p className={`${textPosition} text-black mt-2`}>{text}</p>
  );
}

export default SectionHelperText;
