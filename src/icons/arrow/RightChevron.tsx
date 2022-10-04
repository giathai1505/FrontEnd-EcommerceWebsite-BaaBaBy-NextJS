import { IIconSVGProps } from "@typings";

const RightChevronIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3250_14033)">
        <path
          d="M4.94133 16.5L4 15.5587L10.5873 8.97135C10.7123 8.84633 10.7825 8.67679 10.7825 8.50001C10.7825 8.32324 10.7123 8.1537 10.5873 8.02868L4.01133 1.45402L4.954 0.511353L11.5287 7.08601C11.9036 7.46107 12.1142 7.96969 12.1142 8.50001C12.1142 9.03034 11.9036 9.53896 11.5287 9.91401L4.94133 16.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3250_14033">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightChevronIcon;
