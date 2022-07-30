import React from "react";

const Logo = ({ ...props }) => {
  return (
    <svg
      width={61}
      height={18}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 0h6.172l4.366 9.398L14.88 0h6.173v18h-5.094V8.14l-3.538 8.114H8.631L5.094 8.14V18H0V0Z'
        fill='#005ECD'
      />
      <path
        d='M22.192 0h6.223l3.638 11.811L35.666 0h5.947l-6.725 18h-6.022L22.192 0Z'
        fill='#F90000'
      />
      <path
        d='m48.5 0 5.15 8.568L48.12 18h-6.767l6.173-9.141L41.73 0h6.77ZM52.076 2.562l2.886 5.736L60.473 0h-6.85l-1.547 2.562ZM54.957 8.848l-2.982 5.934L54.025 18H61l-6.043-9.152Z'
        fill='#FF8A00'
      />
    </svg>
  );
};

export default Logo;
