/**
 * @TODO
 *  [ ] convert svg to jsx - Come here: https://magic.reactjs.net/htmltojsx.html
 *  [ ] replace all fill="..." to  fill="currentColor" (except fill=none)
 *  [ ] add {...props} to <svg >
 */

import { IIconSVGProps } from "@typings";

const ProductCatalogIcon: React.FC<IIconSVGProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M12.0021 4.12695C13.0417 4.12695 13.9397 3.42849 14.2622 2.401C13.6468 2.57951 12.8624 2.68725 12.0021 2.68725C11.1419 2.68725 10.3575 2.57951 9.74219 2.401C10.0646 3.42841 10.9625 4.12695 12.0021 4.12695Z"
        fill="currentColor"
      />
      <path
        d="M23.9702 5.39045C23.9208 5.24446 23.818 5.1244 23.6842 5.05902L19.1085 2.83324C18.1352 2.4858 17.1436 2.21137 16.1424 2.01078C16.1071 2.00351 16.072 2 16.0374 2C15.7896 2 15.5676 2.1803 15.5124 2.44473C15.1468 4.14081 13.722 5.41064 12 5.41064C10.278 5.41064 8.85311 4.14089 8.48757 2.44473C8.4317 2.1803 8.21016 2 7.96246 2C7.92787 2 7.89278 2.00351 7.85754 2.01078C6.85637 2.21137 5.86478 2.4858 4.88992 2.83324L0.315866 5.05893C0.181218 5.12431 0.0777554 5.24437 0.0307341 5.39036C-0.0179114 5.53806 -0.00914055 5.69749 0.0594016 5.8368L2.04583 9.96764C2.13881 10.1637 2.32795 10.2814 2.52806 10.2814C2.57971 10.2814 2.63209 10.2735 2.68374 10.2571L4.89 9.56809V23.4285C4.89 23.7433 5.13372 24 5.43322 24H18.5669C18.8656 24 19.1086 23.7432 19.1086 23.4285V9.56826L21.3164 10.2573C21.3681 10.2737 21.4204 10.2815 21.4719 10.2815C21.6716 10.2815 21.86 10.1639 21.9543 9.96781L23.9415 5.83697C24.0084 5.69757 24.018 5.53815 23.9702 5.39045Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ProductCatalogIcon;
