import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type PropTypes = {
  pathName: string;
  removedFirstQuantity: number;
};

function BreadCrumb({ pathName, removedFirstQuantity = 0 }: PropTypes) {
  const elements = pathName.split("/").filter((item) => item != "");
  const itens = elements.map((item, index, array) => {
    const href = `/${array.slice(0, index + 1).join("/")}`;
    const title = item[0].toUpperCase() + item.slice(1);

    return {
      href,
      title,
    };
  });

  const finalItens = itens.slice(removedFirstQuantity);
 
  return (
    <>
      <div className="text-black flex items-center gap-4  text-sm
      ">
        <Link href={"/"}>
          <FaHome />
        </Link>
        <IoIosArrowForward />
        {finalItens.map(({ href, title }, index, list) => {
          return (
            <>
              <Link key={title} href={`${href}`}>
                {title}
              </Link>
              {index !== list.length - 1 && <IoIosArrowForward />}
            </>
          );
        })}
      </div>
    </>
  );
}

export default BreadCrumb;
