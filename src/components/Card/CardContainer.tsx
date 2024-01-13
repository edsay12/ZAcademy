type PropTypes = {
  children: React.ReactNode;
};

function CardContainer({ children }: PropTypes) {
  return <div className="grid grid-cols-4 gap-10">{children}</div>;
}

export default CardContainer;
