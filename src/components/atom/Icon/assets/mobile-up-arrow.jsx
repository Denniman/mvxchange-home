import React from "react";

const MobileUpArrow = ({ ...props }) => {
  return (
    <svg
      width={63}
      height={68}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#a)'>
        <circle cx={34} cy={30} r={24} fill='#005ECD' />
      </g>
      <path
        d='M33 39a1 1 0 1 0 2 0h-2Zm1.707-19.707a1 1 0 0 0-1.414 0l-6.364 6.364a1 1 0 0 0 1.414 1.414L34 21.414l5.657 5.657a1 1 0 0 0 1.414-1.414l-6.364-6.364ZM35 39V20h-2v19h2Z'
        fill='#fff'
      />
      <defs>
        <filter
          id='a'
          x={0}
          y={0}
          width={68}
          height={68}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow_5_6903'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_5_6903'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MobileUpArrow;
