import { Children } from "react";
import CardTop from "./CardTop";

type PropTypes = {
  children: React.ReactNode;
};

function Card({ children }: PropTypes) {
  return <div className=" w-full">{children}</div>;
}

export default Card;
