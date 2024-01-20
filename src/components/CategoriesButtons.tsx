type PropTypes = {
  categories: Array<string>;
  filterItens: (cat: string) => void;
};

function CategoriesButtons({ categories, filterItens }: PropTypes) {
  return (
    <div className="flex gap-5 mt-20 mb-20 text-xs lg:text-lg md:text-sm    w-full flex-wrap">
      <button>All</button>
      {categories.map((item) => {
        return (
          <button key={item} onClick={() => filterItens(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesButtons;
