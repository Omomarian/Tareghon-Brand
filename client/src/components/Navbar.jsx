import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./Mobile-Menu";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { cartItem } = useContext(CartContext);
  return (
    <nav className="flex justify-between items-center shadow-2xl p-5  sticky top-0 bg-white z-20">
      <div className="flex items-center gap-10">
        <img src="logo.jpg" alt="logo" className="image" width={60} />
        <h3 className="text-2xl font-semibold font-serif">TAREGHON BRAND</h3>
      </div>

      <div className=" hidden md:flex items-center gap-3 ">
        <Link className=" hover:text-stone-500" to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>

        <Link className=" hover:text-stone-500" to="/contact">
          <FontAwesomeIcon icon={faCircleQuestion} />
        </Link>
        <Link className=" hover:text-stone-500" to="/icon">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link className=" hover:text-stone-500" to="/shop">
          <FontAwesomeIcon icon={faShop} />
        </Link>
        <Link className=" hover:text-stone-500 relative" to="/cart">
          {cartItem.length > 0 && (
            <p className="absolute -top-2 -right-2 bg-red-700 text-white font-semibold text-xs h-4 w-4 rounded-[100%] grid place-items-center">
              {cartItem.length}
            </p>
          )}
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>

      <div
        onClick={() => setShowMobileNavbar(!showMobileNavbar)}
        className="md:hidden cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {showMobileNavbar && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
