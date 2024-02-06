import ShimmerCards from "./ShimmerCards";

const ShimmerUI = () => {
  const cards = [];
  for (let index = 0; index < 20; index++) {
    cards.push(<ShimmerCards key={index} />);
  }
  return <div className="flex flex-wrap justify-center">{cards}</div>;
};

export default ShimmerUI;
