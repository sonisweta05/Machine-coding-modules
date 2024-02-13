import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="md:p-5 p-1 h-[100vh] w-[25vw] bg-slate-500 text-white min-h-screen float-left">
      <section className="flex justify-center pb-5">
        Welcome to Sweta's Projects
      </section>
      <section className="">
        <ul className="divide-y divide-slate-100">
          <h1 className="font-bold md:text-xl text-l pb-2">List of Projects</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/multi-select">Multi-Select</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/food/home">Food-Buddy</Link>
          </li>
          <li>
            <Link to="/countryGame">Country Game</Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
