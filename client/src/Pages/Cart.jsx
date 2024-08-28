import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../helpers";

const Cart = () => {
  const { setCartItem, cartItem } = useContext(CartContext);
  const [subTotal, setSubTotal] = React.useState(0);

  const increaseCartItem = (id) => {
    const updatedCartItems = cartItem.map((product) => {
      if (product.productId === id) {
        product.quantity++;
      }
      return product;
    });
    setCartItem(updatedCartItems);
    setSubTotal(calculateCartTotal());
  };

  const decreaseCartItem = (id) => {
    const updatedCartItems = cartItem.map((product) => {
      if (product.productId === id && product.quantity !== 1) {
        product.quantity--;
      }
      return product;
    });
    setCartItem(updatedCartItems);
    setSubTotal(calculateCartTotal());
  };

  React.useEffect(() => {
    setSubTotal(calculateCartTotal());
  }, []);

  // A method to calculate the total amount of products
  const calculateCartTotal = () => {
    let totalCost = 0;
    for (let i = 0; i < cartItem.length; i++) {
      totalCost = totalCost + cartItem[i].price * cartItem[i].quantity;
    }
    return totalCost;
  };
  // calculate cart total items ends here

  const removeCartItem = (id) => {
    const updatedCartItems = cartItem.filter(
      (product) => product.productId !== id
    );
    setCartItem(updatedCartItems);
    setSubTotal(calculateCartTotal());
  };

  return (
    <>
      <Navbar />
      {cartItem.length < 1 ? (
        <section className="grid place-items-center h-screen">
          <div className="p-8 rounded-lg shadow-lg text-center">
            😓
            <h1 className="text-3xl font-semibold my-4">No product in cart</h1>
            <Link
              to="/shop"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Shop now!
            </Link>
          </div>
        </section>
      ) : (
        <section className="my-12 grid place-items-center">
          <div className="shadow-md p-4 rounded-lg max-w-[500px] w-full ">
            {cartItem.map((item) => (
              <div
                key={item.productId}
                className="flex  justify-between border-b mb-2 pb-2"
              >
                <img
                  src={item.productImage}
                  alt=""
                  className="w-[120px] h-[150px] rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold capitalize">
                    {item.productName}
                  </h3>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    {" "}
                    {formatCurrency(item.price, "NGN")}
                  </p>

                  <div className="flex items-center gap-3 border p-1 rounded-md shadow-md mt-2">
                    <span
                      onClick={() => decreaseCartItem(item.productId)}
                      className="shadow-md border px-1 cursor-pointer"
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faMinus}
                        style={{ color: "red" }}
                      />
                    </span>
                    <p className="text-gray-500 font-semibold">
                      Qty {item.quantity}
                    </p>
                    <span
                      onClick={() => increaseCartItem(item.productId)}
                      className="shadow-md border px-1 cursor-pointer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </div>

                  <button
                    onClick={() => removeCartItem(item.productId)}
                    className="mt-10 font-semibold hover:opacity-40"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="w-full">
              <div>
                <h3 className="text-2xl font-semibold flex justify-between">
                  <span> Subtotal </span>
                  <span>{formatCurrency(subTotal, "NGN")}</span>
                </h3>
                <p className=" my-2 text-gray-500">
                  Shipping and taxes calculated at checkout
                </p>
              </div>

              <button className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Checkout
              </button>

              <p className="text-center my-3">
                Or{" "}
                <Link to="/shop" className="underline font-semibold ml-1">
                  Continue shopping!
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Cart;
