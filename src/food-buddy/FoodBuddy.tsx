import { Outlet } from "react-router-dom";
import Header from "./componentsFood/Header";
const FoodHub = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default FoodHub;
