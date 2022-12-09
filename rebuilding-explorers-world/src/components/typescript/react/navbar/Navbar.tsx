import * as React from "react";
// import logo from "../../images/dok-logo.png";
import { GenericProps as NavbarProps } from "../../types/props";
import { DropDownMenu } from "./dropdown";

let Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <>
      <nav className="h-16 px-0 grid grid-cols-6">
        <DropDownMenu/>
        <section className="col-start-1 col-span-1 flex justify-between items-center ">
          {props.children}
        </section>
        <section className="col-start-3 col-span-2 normal-case font-bold hidden text-gray-400 hover:text-white lg:flex items-center md:flex md:place-content-center text-xl">
          Explorer&#39;s World
        </section>
        <section className="col-start-6 col-span-1 hover:bg-gray-700 m-4 rounded-md p-2">
          <a href="/">
            {/* <img src={logo} alt="DoK Logo" /> */}
          </a>
        </section>
      </nav>
      <section className="mt-2 h-0.5 w-auto bg-gradient-to-r from-teal-800  to-emerald-400" />
    </>
  );
};

export default Navbar;
