import { useParams } from "react-router-dom";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
import RestaurantMenuShimmerUI from "../shimmer/RestaurantShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers } = useRestaurantMenu(resId);
  return (
    <div className="ml-[10.5rem] md:ml-[270px] mr-1 md:mr-[50px] flex flex-col item-center w-5 md:w-[70vw]">
      {restaurantInfo === null ? (
        <div><RestaurantMenuShimmerUI/></div>
      ) : (
        <RestaurantMenuHeader
          restaurantInfo={restaurantInfo}
          restaurantOffers={restaurantOffers}
        />
      )}
    </div>
  );
};

export default RestaurantMenu;
