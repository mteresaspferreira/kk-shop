import { createContext, useState } from "react";
import { ICartItem, ICartItens } from "../Interfaces/ICartItems";
import { IProduct } from "../Interfaces/IProducts";

export const CartContext = createContext([]);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ICartItens>([]);

  //get product id
  const getProductById = (id: number | undefined) => {
    return cartItems.find((p: ICartItem) => p.product.id === id);
  };

  //add products to cart
  const addProductToCart = (i: ICartItem) => {
    const existingProduct = getProductById(i.product.id);
    let newState: any = [];

    if (existingProduct) {
      newState = cartItems.map((p: ICartItem) => {
        if (p.product.id === existingProduct.product.id) {
          return {
            product: p.product,
            quantity: p.quantity + i.quantity,
          };
        }
        return p;
      });
      setCartItems(newState);
    } else {
      setCartItems([...cartItems, i]);
    }
  };

  //remove products to cart
  const removeProductFromCart = (el: IProduct) => {
    console.log("el ", el);
    const newProducts: any = cartItems.filter(
      (p: ICartItem) => p.product.id !== el.id
    );
    setCartItems(newProducts);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
