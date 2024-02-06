import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faBellConcierge,
  faCartPlus,
  faUtensils,
  faSearch,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
interface NavButton {label:string,icon:IconDefinition}
const NavButtons: Array<NavButton> = [
  { label: "Home", icon:faBellConcierge },
  { label: "Search", icon:faSearch },
  { label: "About", icon:faUtensils },
  { label: "Cart", icon:faCartPlus },
];
type Props = {
  classname: string;
};
const NavLinks = ({ classname }: Props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={classname}>
      {NavButtons.map((menu) => {
        return (
          <NavLink
          key={menu.label}
            to={`/food/${menu.label.toLowerCase()}`}
            className={({ isActive }) => {
              return isActive
                ? "bg-[#1c1c24] text-white font-bold px-4 py-2 rounded-md hover:bg-[#1c1c24c2] hover:scale-110 transition-transform duration-200 gap-2"
                : "";
            }}
          >
            {({isActive}) =>  isActive ? <><FontAwesomeIcon icon={menu.icon}/> {menu.label}</> : <>{menu.label}</> }
          </NavLink>
        );
      })}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default NavLinks;
