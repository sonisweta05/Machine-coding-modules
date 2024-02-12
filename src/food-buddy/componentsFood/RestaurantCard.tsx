import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RESCARD_IMG_URL } from "../constants";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}: any) => {
  
  return (
    <Link to={`/food/restaurant-menu/${id}`}>
    <div className=" flex flex-col flex-wrap hover:scale-90 transition-transform duration-300 cursor-pointer mt-2">
      <div className="w-[288px] h-40 rounded-xl shadow-lg">
        <img
          alt="resCardImg"
          src={RESCARD_IMG_URL + cloudinaryImageId}
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1  >
        <h2>
          <FontAwesomeIcon icon={faStar} style={{ color: "#30c095" }} />
          {avgRating}
          {" "}
          <FontAwesomeIcon icon={faCircle} className="w-2" />
          {" "}
          {sla.deliveryTime} mins
        </h2>
        <div className="text text-wrap w-[250px]">{cuisines.join(", ")}</div>
      </div>
    </div>
    </Link>
  );
};

export default RestaurantCard;
