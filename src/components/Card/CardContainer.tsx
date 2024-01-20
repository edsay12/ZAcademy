type PropTypes = {
  children: React.ReactNode;
};

function CardContainer({ children }: PropTypes) {
  return <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{children}</div>;
}

export default CardContainer;
