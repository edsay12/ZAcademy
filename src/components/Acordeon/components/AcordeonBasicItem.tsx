import { FaRegCirclePlay } from "react-icons/fa6";

type PropTypes = {
    itemId:number
    itemTitle:string
}

function AcordeonBasicItem({itemId,itemTitle}:PropTypes) {
  return (
    <div key={itemId} className="flex gap-2 items-center ">
      <span>
        <FaRegCirclePlay />
      </span>
      {itemTitle}
    </div>
  );
}

export default AcordeonBasicItem;
