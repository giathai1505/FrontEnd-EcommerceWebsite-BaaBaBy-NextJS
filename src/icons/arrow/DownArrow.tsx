import { IIconSVGProps } from "@typings";

const DownIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3389_8421)">
        <path
          d="M8.02862 2.47632L4.73562 5.76932C4.67224 5.83015 4.5878 5.86412 4.49995 5.86412C4.41211 5.86412 4.32766 5.83015 4.26429 5.76932L0.973286 2.47799L0.501953 2.94932L3.79295 6.24066C3.98357 6.42233 4.2368 6.52367 4.50012 6.52367C4.76345 6.52367 5.01667 6.42233 5.20729 6.24066L8.49995 2.94765L8.02862 2.47632Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3389_8421">
          <rect
            width="8"
            height="8"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownIcon;
