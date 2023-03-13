import React from "react";

export const Button = ({ text, handlerClick }) => {
  return (
    <button
      type="submit"
      onClick={handlerClick}
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};
