import React from "react";

const ChevronRight = ({ color, ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m8.44 8.56 4.293 4.293-4.294 4.293 1.414 1.415 5.707-5.707-5.707-5.707L8.44 8.56Z'
        fill={color || "#333"}
      />
    </svg>
  );
};

export default ChevronRight;
