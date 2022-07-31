import React from "react";

const ArrowDown = ({ ...props }) => {
  return (
    <svg
      width={16}
      height={73}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.293 72.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 70.586l-5.657-5.657A1 1 0 0 0 .93 66.343l6.364 6.364ZM7 0v72h2V0H7Z'
        fill='#000'
      />
    </svg>
  );
};

export default ArrowDown;
