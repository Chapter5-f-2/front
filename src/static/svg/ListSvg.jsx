import React from "react";

const ListSvg = ({ _width = 1.7 }) => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={_width}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
};

export default ListSvg;
