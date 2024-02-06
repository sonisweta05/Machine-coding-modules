import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
const FoodHub = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default FoodHub;
