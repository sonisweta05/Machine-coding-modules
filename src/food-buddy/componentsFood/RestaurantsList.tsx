import RestaurantCard from "./RestaurantCard";


const RestaurantsList = ({ restaurants }: any) => {

  return (
      <div className="p-4 flex flex-wrap justify-between">
        {restaurants &&
          restaurants.map((restaurant: any) => <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />)}
      </div>
  );
};

export default RestaurantsList;
