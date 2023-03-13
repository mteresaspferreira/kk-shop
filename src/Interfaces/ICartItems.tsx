import { IProduct } from "./IProducts";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartItens {
  find(arg0: (p: ICartItem) => boolean): unknown;
  map(arg0: (p: any) => any): any[];
  filter(arg0: (p: any) => boolean): unknown;
  cartItems: Array<ICartItem> | undefined;
}

export interface ICarContextProdiver {
  cartItems: Array<ICartItem>;
  addProductToCart: () => void;
  removeProductFromCart: () => void;
}
