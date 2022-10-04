/**
 * @TODO
 *  [ ] convert svg to jsx - Come here: https://magic.reactjs.net/htmltojsx.html
 *  [ ] replace all fill="..." to  fill="currentColor"
 *  [ ] add {...props} to <svg >
 */

import { IIconSVGProps } from "@typings";

const OrderIcon: React.FC<IIconSVGProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.75 1.5H14.121C13.812 0.627 12.978 0 12 0C11.022 0 10.188 0.627 9.8775 1.5H8.25C7.836 1.5 7.5 1.836 7.5 2.25V5.25C7.5 5.664 7.836 6 8.25 6H15.75C16.164 6 16.5 5.664 16.5 5.25V2.25C16.5 1.836 16.164 1.5 15.75 1.5Z"
      fill="currentColor"
    />
    <path
      d="M19.5 3H18V5.25C18 6.4905 16.9905 7.5 15.75 7.5H8.25C7.0095 7.5 6 6.4905 6 5.25V3H4.5C3.6735 3 3 3.6735 3 4.5V22.5C3 23.3415 3.6585 24 4.5 24H19.5C20.3415 24 21 23.3415 21 22.5V4.5C21 3.6585 20.3415 3 19.5 3ZM11.781 16.281L8.781 19.281C8.634 19.4265 8.442 19.5 8.25 19.5C8.058 19.5 7.866 19.4265 7.719 19.281L6.219 17.781C5.9265 17.4885 5.9265 17.013 6.219 16.7205C6.5115 16.428 6.987 16.428 7.2795 16.7205L8.25 17.6895L10.719 15.2205C11.0115 14.928 11.487 14.928 11.7795 15.2205C12.072 15.513 12.0735 15.987 11.781 16.281ZM11.781 10.281L8.781 13.281C8.634 13.4265 8.442 13.5 8.25 13.5C8.058 13.5 7.866 13.4265 7.719 13.281L6.219 11.781C5.9265 11.4885 5.9265 11.013 6.219 10.7205C6.5115 10.428 6.987 10.428 7.2795 10.7205L8.25 11.6895L10.719 9.2205C11.0115 8.928 11.487 8.928 11.7795 9.2205C12.072 9.513 12.0735 9.987 11.781 10.281ZM17.25 18H14.25C13.836 18 13.5 17.664 13.5 17.25C13.5 16.836 13.836 16.5 14.25 16.5H17.25C17.664 16.5 18 16.836 18 17.25C18 17.664 17.664 18 17.25 18ZM17.25 12H14.25C13.836 12 13.5 11.664 13.5 11.25C13.5 10.836 13.836 10.5 14.25 10.5H17.25C17.664 10.5 18 10.836 18 11.25C18 11.664 17.664 12 17.25 12Z"
      fill="currentColor"
    />
  </svg>
);

export default OrderIcon;
