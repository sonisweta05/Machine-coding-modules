import { faClock, faStar, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RestaurantMenuHeader = ({ restaurantInfo, restaurantOffers }: any) => {
  const { name, cuisines, locality, sla, avgRatingString, totalRatingsString, 
    costForTwoMessage } =
    restaurantInfo;
  return (
    <>
      <div className="m-2 text-xs flex gap-1 text-gray-400 font-medium">
        <Link to="/">Home</Link>
        <span>/Pune/</span>
        <span>{name}</span>
      </div>
      <div className="flex gap-1 justify-between border border-gray-300 p-2 bg-gray-100 rounded-lg my-1">
        <div>
          <h1 className="font-bold">{name}</h1>
          <h6 className="text-xs text-gray-400 font-medium">{cuisines.join(", ")}</h6>
          <h6 className="text-xs text-gray-400 font-medium">
            {locality}
            {", "}
            {sla.lastMileTravel} km
          </h6>
        </div>
        <div className="flex flex-col gap-1 mr-4 rounded-lg border-2 p-1 md:h-14 w-20 text-center bg-gray-50">
          <h1 className="rounded-lg  text-green-500 text-xs md:text-sm">
            <FontAwesomeIcon icon={faStar} />
            {avgRatingString}
          </h1>
          <h6 className="text-xs md:text-sm font-light">{totalRatingsString}</h6>
        </div>
      </div>
      <div className="p-2 border border-gray-300 bg-gray-100 rounded-lg my-1">
        <div className="p-2"><FontAwesomeIcon icon={faClock} />{sla.slaString} {costForTwoMessage}</div>
        <div className="flex overflow-scroll  w-screen h-28  no-scrollbar scroll-smooth">
      { restaurantOffers.map((restaurant:any) => {
        return (
        <div className=" border-2 rounded-md p-2 flex flex-col gap-2 cursor-pointer bg-white tracking-tight ">
          <h2 className="flex text-wrap gap-2 items-center text-sm font-bold text-gray-600"><FontAwesomeIcon icon={faTag} />{restaurant.info.header}</h2>
          <p className="text-xs font-semibold text-gray-500">{restaurant.info.couponCode} | {restaurant.info.description} </p>
        </div>)
      })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuHeader;
