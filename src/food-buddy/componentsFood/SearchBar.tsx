import { faBolt, faSeedling, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

type Props = {
  onSearchFilter: (val: string) => void;
  searchText: string;
  setSearchText: (val: string) => void;
  onTopRatedFilter?: (val: string) => void;
  onVegFilter?: (val: string) => void;
  onDeliveryTimeFilter?: (val: string) => void;
};

const SearchBar = ({
  onSearchFilter,
  searchText,
  setSearchText,
  onTopRatedFilter,
  onVegFilter,
  onDeliveryTimeFilter,
}: any) => {
  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchFilter(searchText);
    }
  };
  return (
    <div className="w-11/12">
      <div className="flex md:justify-between justify-center flex-col md:flex-row item-center m-3 ">
        <div className="flex items-center justify-center">
          <input
            className=" text-sm md:w-72 p-2 mr-3 h-10 rounded-xl"
            placeholder="Find your restaurant"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleEnter}
            value={searchText}
          />
          <Button
            onClick={() => {
              onSearchFilter(searchText);
            }}
            btnText="Search"
          />
        </div>
        <div className="flex flex-nowrap ml-2 mt-2 gap-4">
          <Button
            onClick={onTopRatedFilter}
            btnIcon={faStar}
            btnText="Top Rated"
          />
          <Button
            onClick={onDeliveryTimeFilter}
            btnIcon={faBolt}
            btnText="Delivery Time"
          />
          <Button
            onClick={onVegFilter}
            btnIcon={faSeedling}
            btnText="Veg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
