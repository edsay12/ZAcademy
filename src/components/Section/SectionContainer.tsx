import { ReactNode } from "react";

type propTypes = {
  children:ReactNode
  bgColor?:string
}


function SectionContainer({ children,bgColor }: propTypes) {
return <section className={`appcontainer   h-full block mt-16 ${bgColor}`}>{children}</section>;
}

export default SectionContainer;
