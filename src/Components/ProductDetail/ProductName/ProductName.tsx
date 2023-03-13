interface IName {
  name: string;
}

export const ProductName = ({ name }: IName) => {
  return <h1 className="text-xl font-medium text-gray-900">{name}</h1>;
};
