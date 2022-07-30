import React from "react";

const Receipt = ({ ...props }) => {
  return (
    <svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.5 9.167H15V3.333a.833.833 0 0 0-.833-.833H2.5a.833.833 0 0 0-.833.833V15c0 1.378 1.121 2.5 2.5 2.5h11.666c1.379 0 2.5-1.122 2.5-2.5v-5a.833.833 0 0 0-.833-.833ZM4.167 15.833A.834.834 0 0 1 3.333 15V4.167h10V15c0 .293.051.573.143.833h-9.31Zm12.5-.833A.833.833 0 1 1 15 15v-4.167h1.667V15Z'
        fill='#FF8A00'
      />
      <path
        d='M5 5.833h6.667V7.5H5V5.833Zm0 3.334h6.667v1.667H5V9.167ZM9.167 12.5h2.5v1.667h-2.5V12.5Z'
        fill='#FF8A00'
      />
    </svg>
  );
};

export default Receipt;
