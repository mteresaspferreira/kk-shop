import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const OrderSummary = () => {
  //context
  const { cartItems } = useContext(CartContext);

  //get subtotal price
  const getTotalPrice = () =>
    cartItems.reduce(
      (acc: any, curr: any) => acc + curr.product.price * curr.quantity,
      0
    );
  const result = getTotalPrice(cartItems);

  //get total price
  const shippingPrice: number = parseFloat(3.99);
  const total = result + shippingPrice;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">{result} €</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            {cartItems.length > 0 ? "3.99" : "0"} €
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">
            {cartItems.length > 0 ? total : "0"} €
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          disabled={cartItems.length == 0}
          className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-500"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};
