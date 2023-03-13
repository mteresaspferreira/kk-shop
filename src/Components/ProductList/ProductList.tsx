import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../Interfaces/IProducts";
import { PageTitle } from "../UI/PageTitle/PageTitle";

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.escuelajs.co/api/v1/products?categoryId=4&offset=0&limit=15"
    )
      .then((res) => res.json())
      .then((json) => {
        const productsList = json;
        setLoading(false);
        setProducts(productsList);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <PageTitle text="Products" />

        {isLoading && (
          <p className="flex justify-center align-middle">Loading...</p>
        )}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price} €
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
