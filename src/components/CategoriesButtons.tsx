import { CardData } from "@/app/@types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PropTypes = {
  categories: Array<string>;
  itens: CardData[];
  filter: CardData[];
  limit: number;
  setFilterItens: Dispatch<SetStateAction<CardData[]>>;
};

function CategoriesButtons({
  categories: AllCategories,
  itens,
  filter,
  limit,
  setFilterItens,
}: PropTypes) {
  const [category, setCategory] = useState("ALL");

  useEffect(() => {
    if (category === "ALL") {
      if (limit > 0) {
        setFilterItens(itens.slice(0, limit));
      } else {
        setFilterItens(itens);
      }
    } else {
      let filteredItens = itens.filter((item) => item.category === category);
      if (limit > 0) {
        setFilterItens(filteredItens.slice(0, limit));
      } else {
        setFilterItens(filteredItens);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, itens, limit]);

  console.log(filter);

  return (
    <div className="flex gap-5 mt-20 mb-20 text-xs lg:text-lg md:text-sm    w-full flex-wrap">
      {AllCategories.map((item) => {
        return (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={` ${item === category && 'border-b-2 border-b-white' }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesButtons;
