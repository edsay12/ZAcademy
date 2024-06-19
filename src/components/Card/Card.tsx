import { Children, Suspense } from "react";
import CardTop from "./CardTop";
import Loading from "../Loading";

type PropTypes = {
  children: React.ReactNode;
};

function Card({ children }: PropTypes) {
  return <div className=" w-full">{children}</div>;
}

export default Card;
