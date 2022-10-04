/**
 * @TODO
 *  [ ] convert svg to jsx - Come here: https://magic.reactjs.net/htmltojsx.html
 *  [ ] replace all fill="..." to  fill="currentColor" (except fill=none)
 *  [ ] add {...props} to <svg >
 */

import { IIconSVGProps } from "@typings";

export const BackIcon: React.FC<IIconSVGProps> = props => (
  <svg
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.4543 28.4375C7.98568 28.4375 1.91504 22.4125 1.91504 15C1.91504 7.5875 7.98568 1.5625 15.4543 1.5625C22.923 1.5625 28.9936 7.5875 28.9936 15C28.9936 22.4125 22.923 28.4375 15.4543 28.4375ZM15.4543 3.4375C9.03104 3.4375 3.80424 8.625 3.80424 15C3.80424 21.375 9.03104 26.5625 15.4543 26.5625C21.8776 26.5625 27.1044 21.375 27.1044 15C27.1044 8.625 21.8776 3.4375 15.4543 3.4375Z"
      fill="#202333"
    />
    <path
      d="M19.8625 15.9375H12.3057C11.7893 15.9375 11.3611 15.5125 11.3611 15C11.3611 14.4875 11.7893 14.0625 12.3057 14.0625H19.8625C20.3789 14.0625 20.8071 14.4875 20.8071 15C20.8071 15.5125 20.3789 15.9375 19.8625 15.9375Z"
      fill="#202333"
    />
    <path
      d="M14.8246 19.6873C14.5853 19.6873 14.346 19.5998 14.1571 19.4123L10.3787 15.6623C10.0134 15.2998 10.0134 14.6998 10.3787 14.3373L14.1571 10.5873C14.5223 10.2248 15.1269 10.2248 15.4921 10.5873C15.8574 10.9498 15.8574 11.5498 15.4921 11.9123L12.3812 14.9998L15.4921 18.0873C15.8574 18.4498 15.8574 19.0498 15.4921 19.4123C15.3032 19.5998 15.0639 19.6873 14.8246 19.6873Z"
      fill="#202333"
    />
  </svg>
);
