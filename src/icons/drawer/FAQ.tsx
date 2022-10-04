import { IIconSVGProps } from "@typings";

const FAQIcon: React.FC<IIconSVGProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 2.42999H7C4 2.42999 2 4.42999 2 7.42999V13.43C2 16.43 4 18.43 7 18.43V20.56C7 21.36 7.89 21.84 8.55 21.39L13 18.43H17C20 18.43 22 16.43 22 13.43V7.42999C22 4.42999 20 2.42999 17 2.42999ZM12 14.6C11.58 14.6 11.25 14.26 11.25 13.85C11.25 13.44 11.58 13.1 12 13.1C12.42 13.1 12.75 13.44 12.75 13.85C12.75 14.26 12.42 14.6 12 14.6ZM13.26 10.45C12.87 10.71 12.75 10.88 12.75 11.16V11.37C12.75 11.78 12.41 12.12 12 12.12C11.59 12.12 11.25 11.78 11.25 11.37V11.16C11.25 9.99999 12.1 9.42999 12.42 9.20999C12.79 8.95999 12.91 8.78999 12.91 8.52999C12.91 8.02999 12.5 7.61999 12 7.61999C11.5 7.61999 11.09 8.02999 11.09 8.52999C11.09 8.93999 10.75 9.27999 10.34 9.27999C9.93 9.27999 9.59 8.93999 9.59 8.52999C9.59 7.19999 10.67 6.11999 12 6.11999C13.33 6.11999 14.41 7.19999 14.41 8.52999C14.41 9.66999 13.57 10.24 13.26 10.45Z"
      fill="currentColor"
    />
  </svg>
);

export default FAQIcon;