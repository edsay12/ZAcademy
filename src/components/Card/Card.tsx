import { Children } from "react";
import CardTop from "./CardTop";

type PropTypes = {
  children: React.ReactNode;
};

function Card({ children }: PropTypes) {
  return <div className="max-w-96 w-full">{children}</div>;
}

export default Card;
