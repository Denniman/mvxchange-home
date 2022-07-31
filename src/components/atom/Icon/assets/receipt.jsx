import React from "react";

const Receipt = ({ ...props }) => {
  return (
    <svg
      width={39}
      height={39}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx={19.5} cy={19.5} r={19.5} fill='#FF8A00' fillOpacity={0.15} />
      <path
        d='M26.5 18.167H24v-5.834a.833.833 0 0 0-.833-.833H11.5a.833.833 0 0 0-.833.833V24c0 1.378 1.121 2.5 2.5 2.5h11.666c1.379 0 2.5-1.122 2.5-2.5v-5a.833.833 0 0 0-.833-.833Zm-13.333 6.666a.834.834 0 0 1-.834-.833V13.167h10V24c0 .293.051.573.143.833h-9.31Zm12.5-.833A.833.833 0 0 1 24 24v-4.167h1.667V24Z'
        fill='#FF8A00'
      />
      <path
        d='M14 14.833h6.667V16.5H14v-1.667Zm0 3.334h6.667v1.666H14v-1.666Zm4.167 3.333h2.5v1.667h-2.5V21.5Z'
        fill='#FF8A00'
      />
    </svg>
  );
};

export default Receipt;
