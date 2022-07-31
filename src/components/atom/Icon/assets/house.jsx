import React from "react";

const House = ({ ...props }) => {
  return (
    <svg
      width={39}
      height={39}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.5 28h21v1.5h-21V28Zm18.75-12.75a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.495-.705l-8.25-3a.75.75 0 0 0-.51 0l-8.25 3a.75.75 0 0 0-.495.705v2.25a.75.75 0 0 0 .75.75h.75V25H10v1.5h18V25h-1.5v-9.75h.75ZM11.5 12.775l7.5-2.73 7.5 2.73v.975h-15v-.975ZM20.5 25h-3v-9.75h3V25ZM13 15.25h3V25h-3v-9.75ZM25 25h-3v-9.75h3V25Z'
        fill='#FF8A00'
      />
      <circle cx={19.5} cy={19.5} r={19.5} fill='#FF8A00' fillOpacity={0.15} />
    </svg>
  );
};

export default House;
