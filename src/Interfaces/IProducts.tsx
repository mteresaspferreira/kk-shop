export interface IProducts {
  products: Array<string>;
}

export interface IProduct {
  id: number;
  description: string;
  images: Array<string>;
  price: number;
  title: string;
  score: number;
}
