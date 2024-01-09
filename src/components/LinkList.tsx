import { LinkType } from "@/app/@types";
import LinkItem from "./LinkItem";
import { HtmlHTMLAttributes } from "react";

type propTypes = { Links: LinkType[] } & HtmlHTMLAttributes<HTMLUListElement>;

function LinkList({ Links = [],...rest }: propTypes) {
  return (
    <ul {...rest}>
      {Links.map((link) => {
        return <LinkItem key={link.name} path={link.path} title={link.name} />;
      })}
    </ul>
  );
}

export default LinkList;
