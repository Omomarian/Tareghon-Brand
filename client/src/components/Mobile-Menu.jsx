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

const MobileMenu = () => {
  return (
    <div className="absolute top-[80px] bg-white right-0">
      <div className="flex flex-col p-8 gap-4 shadow-md rounded-2xl">
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
        <Link className=" hover:text-stone-500" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
