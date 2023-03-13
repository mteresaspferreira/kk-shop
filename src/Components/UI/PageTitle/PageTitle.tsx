interface ITitle {
  text: string;
}

export const PageTitle = ({ text }: ITitle) => {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
      {text}
    </h1>
  );
};
