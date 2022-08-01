import React from "react";

const Talk = ({ ...props }) => {
  return (
    <svg
      width={116}
      height={116}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#a)'>
        <circle cx={58} cy={54} r={48} fill='#fff' />
      </g>
      <path
        d='M40.912 71.088A24.091 24.091 0 0 1 33.833 54c0-13.347 10.82-24.166 24.167-24.166 13.347 0 24.167 10.819 24.167 24.166S71.347 78.167 58 78.167H33.833l7.079-7.079Zm7.421-14.671a9.667 9.667 0 0 0 19.334 0H48.333Z'
        fill='#005ECD'
      />
      <defs>
        <filter
          id='a'
          x={0}
          y={0}
          width={116}
          height={116}
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
            result='effect1_dropShadow_2_10078'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow_2_10078'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Talk;
