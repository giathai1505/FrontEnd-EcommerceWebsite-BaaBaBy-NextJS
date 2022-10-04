/**
 * @TODO
 *  [ ] convert svg to jsx - Come here: https://magic.reactjs.net/htmltojsx.html
 *  [ ] replace all fill="..." to  fill="currentColor" (except fill=none)
 *  [ ] add {...props} to <svg >
 */

import { IIconSVGProps } from "@typings";

const StoreIcon: React.FC<IIconSVGProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z"
      fill="currentColor"
    />
  </svg>
);

export default StoreIcon;
