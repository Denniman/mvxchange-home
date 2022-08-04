import React from "react";

const Close = ({ ...props }) => {
  return (
    <svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.59.458 7.931 6.114 2.276.458.391 2.344 6.047 8 .39 13.656l1.885 1.885 5.656-5.656 5.657 5.656 1.886-1.885L9.819 8l5.656-5.656L13.589.458Z'
        fill='#545454'
      />
    </svg>
  );
};

export default Close;
