import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Icon from "./Pages/Icon";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/icon",
    element: <Icon />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
