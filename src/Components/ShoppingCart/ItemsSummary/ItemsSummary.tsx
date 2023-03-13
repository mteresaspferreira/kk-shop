import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

export const ItemsSummary = ({ products }) => {
  //context
  const { removeProductFromCart } = useContext(CartContext);
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <ul
        role="list"
        className="divide-y divide-gray-200 border-t border-b border-gray-200"
      >
        {products == 0 && (
          <h3 className="font-bold text-small py-4 text-indigo-600">
            Your shopping bag is empty.
          </h3>
        )}
        {products &&
          products.map((i: any) => (
            <li key={i.product.id} className="flex py-6 sm:py-10">
              <div className="flex-shrink-0">
                <img
                  src={i.product.images[0]}
                  alt={i.product.images[0]}
                  className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <Link
                          to={`/productDetail/${i.product.id}`}
                          className="font-medium text-indigo-700 hover:text-gray-800"
                        >
                          {i.product.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {i.product.price} €
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 sm:pr-9">
                    <span className="text-sm font-bold text-gray-700 hover:text-gray-800">
                      {i.quantity}
                    </span>

                    <div className="absolute top-0 right-0">
                      <button
                        type="button"
                        onClick={() => removeProductFromCart(i.product)}
                        className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Remove</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
