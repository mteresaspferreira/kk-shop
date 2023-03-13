import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductGallery } from "./ProductGallery/ProductGallery";
import { ProductPolicies } from "./ProductPolicies/ProductPolicies";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { ProductScore } from "./ProductScore/ProductScore";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { ProductName } from "./ProductName/ProductName";
import { Button } from "../UI/Button/Button";
import { CartContext } from "../../Context/CartContext";
import { IProduct } from "../../Interfaces/IProducts";
import { BreadCrumb } from "../UI/BreadCrumb/BreadCrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  //context
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setLoading(false);
        setProduct(product);
      })
      .catch((error) => {
        throw error;
      });
  }, [id]);

  const handlerAddToCart = () => {
    toast.success(`${product.title} has been added to yout cart.`);
    addProductToCart({ product, quantity: 1 });
  };

  return (
    <>
      {isLoading && (
        <p className="flex justify-center align-middle">Loading...</p>
      )}
      {product && (
        <>
          <BreadCrumb currentPage={product.title} />
          <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <ProductName name={product.title} />
                  <ProductPrice price={product.price} />
                </div>
                <ProductScore score={product.score} />
              </div>
              <ProductGallery images={product.images} />
              <div className="mt-8 lg:col-span-5">
                <Button text="Add to cart" handlerClick={handlerAddToCart} />
                <ProductDescription description={product.description} />
                <ProductPolicies />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
