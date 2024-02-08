import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RESCARD_IMG_URL } from "../constants";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}: any) => {
  return (
    <div className=" flex flex-col flex-wrap hover:scale-90 transition-transform duration-300 cursor-pointer ">
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
  );
};

export default RestaurantCard;
