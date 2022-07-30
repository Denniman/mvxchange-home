import React from "react";

const Haulage = ({ ...props }) => {
  return (
    <svg
      width={24}
      height={15}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4v0Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4v0Z'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeMiterlimit={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.05 12H15V1.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6V6.5'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
      />
      <path
        d='M2 4h4'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 4h4.909c.101 0 .2.034.286.097a.586.586 0 0 1 .193.259l1.566 4.028c.03.076.046.16.046.243V11.4a.675.675 0 0 1-.04.23.61.61 0 0 1-.114.194.525.525 0 0 1-.17.13.468.468 0 0 1-.201.046h-1.663M16 12h-.125'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Haulage;
