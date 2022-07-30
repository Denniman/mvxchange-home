import React from "react";

const Linkedin = ({ ...props }) => {
  return (
    <svg
      width={17}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.159 16H.73V4.572H4.16V16Zm12.571 0h-3.428V9.895c0-1.59-.567-2.383-1.69-2.383-.89 0-1.455.444-1.739 1.332V16H6.445s.045-10.286 0-11.428H9.15l.21 2.285h.07c.703-1.143 1.826-1.917 3.367-1.917 1.171 0 2.119.325 2.842 1.144.728.819 1.09 1.918 1.09 3.462V16ZM2.444 3.429c.979 0 1.772-.768 1.772-1.714C4.216.768 3.423 0 2.444 0 1.466 0 .673.768.673 1.715c0 .946.793 1.714 1.771 1.714Z'
        fill='#005ECD'
      />
    </svg>
  );
};

export default Linkedin;
