import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { PageTitle } from "../UI/PageTitle/PageTitle";
import { ItemsSummary } from "./ItemsSummary/ItemsSummary";
import { OrderSummary } from "./OrderSummary/OrderSummary";

export const ShoppingCart = () => {
  //context
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto lg:grid lg:auto-rows-min max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <PageTitle text="Shopping Cart" />
          {cartItems && (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <ItemsSummary products={cartItems} />
              <OrderSummary />
            </form>
          )}
        </div>
      </div>
    </>
  );
};
