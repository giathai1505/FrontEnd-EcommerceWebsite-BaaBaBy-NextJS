import React from "react";

export const Start = ({ w, h }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3060_11586)">
        <path
          d="M16.2223 19.43L9.99976 14.8567L3.77726 19.43L6.16643 12.0442L-0.0527344 7.50002H7.62559L9.99976 0.101685L12.3739 7.50002H20.0514L13.8331 12.0442L16.2223 19.43Z"
          fill="#F0A500"
        />
      </g>
      <defs>
        <clipPath id="clip0_3060_11586">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const StartDisable = ({ w, h }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3060_11594)">
        <path
          opacity="0.5"
          d="M16.2223 19.43L9.99976 14.8567L3.77726 19.43L6.16643 12.0442L-0.0527344 7.50002H7.62559L9.99976 0.101685L12.3739 7.50002H20.0514L13.8331 12.0442L16.2223 19.43Z"
          fill="#818181"
        />
      </g>
      <defs>
        <clipPath id="clip0_3060_11594">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
