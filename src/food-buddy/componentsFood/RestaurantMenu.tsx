import { useParams } from "react-router-dom";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu";
import RestaurantMenuHeader from "./RestaurantMenuHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers } = useRestaurantMenu(resId);
  return (
    <div className="ml-14 mr-14 flex flex-col justify-center">
      {restaurantInfo === null ? (
        <div>"hi"</div>
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
