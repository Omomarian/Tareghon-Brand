import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../helpers";

const Shop = () => {
  const { setCartItem, cartItem } = useContext(CartContext);

  const addProductToCart = (id) => {
    // check if product is already in cart

    const productAlreadyInCart = cartItem.find((item) => item.productId === id);

    if (productAlreadyInCart) {
      alert("Product already in cart");
      return;
    }
    const selectedProduct = products.find((item) => item.productId === id);

    setCartItem([...cartItem, selectedProduct]);
  };
  return (
    <>
      <Navbar />
      <section className="max-w-[900px] mx-auto">
        {" "}
        {products.map((item) => (
          <div className="flex font-sans p-2 bg-white shadow-lg ">
            <div className="flex-none w-48 relative">
              <img
                src={item.productImage}
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {item.productName}
                </h1>
                <div className="text-lg font-semibold text-black">
                  {formatCurrency(item.price, "NGN")}
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  In stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  <label>
                    <input
                      class="sr-only peer"
                      name="size"
                      type="radio"
                      value="s"
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      S
                    </div>
                  </label>
                  <label>
                    <input
                      class="sr-only peer"
                      name="size"
                      type="radio"
                      value="m"
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      M
                    </div>
                  </label>
                  <label>
                    <input
                      class="sr-only peer"
                      name="size"
                      type="radio"
                      value="l"
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      L
                    </div>
                  </label>
                  <label>
                    <input
                      class="sr-only peer"
                      name="size"
                      type="radio"
                      value="xl"
                    />
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                  <button
                    onClick={() => addProductToCart(item.productId)}
                    class="h-10 px-6 font-semibold rounded-md border bg-zinc-800 text-white hover:bg-black"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Shop;
