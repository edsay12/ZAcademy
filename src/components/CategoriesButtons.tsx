type PropTypes = {
  categories: Array<string>;
  filterItens: (cat: string) => void;
};

function CategoriesButtons({ categories, filterItens }: PropTypes) {
  return (
    <div className="flex gap-10 mt-20 mb-20">
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
