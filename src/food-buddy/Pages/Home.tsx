import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Carousel from "../componentsFood/Carousel";
import ShimmerUI from "../shimmer/ShimmerUI";

const Home = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const getRestaurants = async () => {
    const data = await fetch(API_URL);
    const apiResult = await data.json();

    const APICall =
      apiResult?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      apiResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(APICall);
    setCarouselCards(
      apiResult?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <div className="w-11/12 min-h-[80vh] flex items-center flex-col select-none pt-2">
      {allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        carouselCards && <Carousel carouselCards={carouselCards} />
      )}
    </div>
  );
};

export default Home;
