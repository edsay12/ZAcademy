import { CardData } from "@/app/@types";
import { Dispatch, SetStateAction, useState } from "react";

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
  const handdleClick = (category = "ALL") => {
    if (category === "ALL") {
      if(limit){

        return setFilterItens(itens .splice(0,limit));
      }
      return setFilterItens(itens)

    } else {
      let filteredItens = itens.filter((item) => item.category === category);

      if (limit) {
        return setFilterItens(filteredItens.slice(0, limit));
      }

      return setFilterItens(filteredItens);
    }
  };

  console.log(filter);

  return (
    <div className="flex gap-5 mt-20 mb-20 text-xs lg:text-lg md:text-sm    w-full flex-wrap">
      {AllCategories.map((item) => {
        return (
          <button
            key={item}
            onClick={() => handdleClick(item)}
            className="border-b-2 border-b-white"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesButtons;
