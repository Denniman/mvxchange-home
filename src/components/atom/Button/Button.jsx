import React from "react";

export const Button = ({ children }) => {
  return (
    <button className='rounded-lg font-primary px-8 py-5 text-center w-full text-white bg-secondary'>
      {children}
    </button>
  );
};
