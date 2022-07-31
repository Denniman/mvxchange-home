import React from "react";

const Freight = ({ ...props }) => {
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
        d='M18.25 9.25v1.5h-3V13h-3v4.43l-.633.14v.024c-1.353.292-2.024 1.86-1.313 3.047l1.196 2.015v3.727a3.719 3.719 0 0 1-1.031-.469l-.938 1.172s1.157.914 2.742.914a4.008 4.008 0 0 0 2.227-.633c.437.267 1.17.633 2.273.633A4.008 4.008 0 0 0 19 27.367c.436.267 1.17.633 2.273.633a4.008 4.008 0 0 0 2.227-.633c.436.267 1.17.633 2.273.633 1.586 0 2.696-.914 2.696-.914l-.938-1.172s-.407.325-1.031.492v-3.75l1.195-2.016c.712-1.186.041-2.753-1.312-3.046l-.633-.141V13h-3v-2.25h-3v-1.5h-1.5Zm-1.5 3h4.5v2.25h3v2.625l-5.086-1.102L19 16l-.164.023-5.086 1.102V14.5h3v-2.25ZM19 17.547l7.055 1.5c.393.085.583.477.375.82l-1.313 2.203-.117.164v4.149a3.719 3.719 0 0 1-1.031-.469l-.469-.375-.469.375s-.753.586-1.758.586-1.804-.586-1.804-.586L19 25.54l-.469.375s-.753.586-1.758.586-1.804-.586-1.804-.586l-.469-.375-.469.375s-.407.325-1.031.492v-4.172l-.117-.164-1.313-2.203c-.208-.345-.018-.735.375-.82l7.055-1.5ZM15.25 19c-.451 0-.75.525-.75 1.125s.299 1.125.75 1.125.75-.525.75-1.125S15.701 19 15.25 19Zm7.5 0c-.451 0-.75.525-.75 1.125s.299 1.125.75 1.125.75-.525.75-1.125S23.201 19 22.75 19Z'
        fill='#1261BF'
      />
    </svg>
  );
};

export default Freight;
