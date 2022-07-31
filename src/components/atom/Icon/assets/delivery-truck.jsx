import React from "react";

const DeliveryTruck = ({ ...props }) => {
  return (
    <svg
      width={39}
      height={39}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx={19.5} cy={19.5} r={19.5} fill='#005ECD' fillOpacity={0.15} />
      <path
        d='M15 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4v0Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4v0Z'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeMiterlimit={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.05 24H22V13.6a.6.6 0 0 0-.6-.6H8m4.65 11H10.6a.6.6 0 0 1-.6-.6v-4.9'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
      />
      <path
        d='M9 16h4'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23 16h4.909c.101 0 .2.034.286.097a.585.585 0 0 1 .193.259l1.566 4.028c.03.076.046.16.046.243V23.4a.675.675 0 0 1-.04.23.61.61 0 0 1-.114.194.525.525 0 0 1-.17.13.468.468 0 0 1-.201.046h-1.663M23 24h-.125'
        stroke='#1261BF'
        strokeWidth={1.3}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default DeliveryTruck;
