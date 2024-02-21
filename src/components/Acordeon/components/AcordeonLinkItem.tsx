import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

type PropTypes = {
    itemTitle:string
    itemUrl:string
}

function AcordeonLinkItem({itemTitle,itemUrl}:PropTypes) {
  return (
    <Link href={itemUrl} className="flex gap-2 items-center ">
      <span>
        <FaRegCirclePlay />
      </span>
      {itemTitle}
    </Link>
  );
}

export default AcordeonLinkItem;
