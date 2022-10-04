import { IIconSVGProps } from "@typings";

const SearchIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 17 16"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3389_5183)">
        <path
          d="M16.2067 14.2968L13.1099 11.1987C15.4271 8.10223 14.7953 3.71356 11.6987 1.39641C8.60223 -0.920736 4.21356 -0.288925 1.89641 2.80759C-0.420736 5.90411 0.211075 10.2928 3.30759 12.6099C5.79497 14.4713 9.21134 14.4713 11.6987 12.6099L14.7968 15.708C15.1861 16.0973 15.8174 16.0973 16.2067 15.708C16.596 15.3187 16.596 14.6875 16.2067 14.2982L16.2067 14.2968ZM7.52899 12.012C4.77695 12.012 2.54601 9.78102 2.54601 7.02899C2.54601 4.27695 4.77695 2.04601 7.52899 2.04601C10.281 2.04601 12.512 4.27695 12.512 7.02899C12.509 9.77978 10.2798 12.009 7.52899 12.012Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3389_5183">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
