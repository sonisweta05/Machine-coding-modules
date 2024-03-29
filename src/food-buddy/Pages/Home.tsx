import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Carousel from "../componentsFood/Carousel";
import ShimmerUI from "../shimmer/ShimmerUI";
import RestaurantsList from "../componentsFood/RestaurantsList";
import SearchBar from "../componentsFood/SearchBar";

const Home = () => {
  const [carouselCards, setCarouselCards] = useState<any[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
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
    setFilteredRestaurants(APICall);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const onSearchFilter = (searchText: any) => {
    const filterRestaurants = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filterRestaurants);
  };

  const onTopRatedFilter = () => {
    const topRated = allRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(topRated);
  };
  const onVegFilter = () => {
    const veg = allRestaurants.filter(
      (restaurant) => restaurant.info.veg === true
    );
    setFilteredRestaurants(veg);
  };
  const onDeliveryTimeFilter = () => {
    const deliveryTime = allRestaurants.filter(
      (restaurant) => restaurant.info.sla.deliveryTime < 30
    );
    setFilteredRestaurants(deliveryTime);
  };

  return (
    <div className="md:pl-[20px] md:pr-[20px]  min-h-[80vh] flex items-center justify-center flex-col select-none pt-2">
      {allRestaurants.length === 0 ? (
        <ShimmerUI />
      ) : (
        <>
          {carouselCards && <Carousel carouselCards={carouselCards} />}
          <SearchBar
            onSearchFilter={onSearchFilter}
            searchText={searchText}
            setSearchText={setSearchText}
            onTopRatedFilter={onTopRatedFilter}
            onVegFilter={onVegFilter}
            onDeliveryTimeFilter={onDeliveryTimeFilter}
          />
          <RestaurantsList restaurants={filteredRestaurants} />
        </>
      )}
    </div>
  );
};

export default Home;
