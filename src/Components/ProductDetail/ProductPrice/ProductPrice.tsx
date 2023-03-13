interface IPrice {
  price: string;
}

export const ProductPrice = ({ price }: IPrice) => {
  return <p className="text-xl font-medium text-gray-900">{price} €</p>;
};
