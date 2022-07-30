import React from "react";

const Facebook = ({ ...props }) => {
  return (
    <svg
      width={10}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.544 6h3v3h-3v7h-3V9h-3V6h3V4.745c0-1.189.374-2.69 1.118-3.512C5.406.41 6.335 0 7.448 0h2.096v3h-2.1c-.498 0-.9.402-.9.9V6Z'
        fill='#005ECD'
      />
    </svg>
  );
};

export default Facebook;
