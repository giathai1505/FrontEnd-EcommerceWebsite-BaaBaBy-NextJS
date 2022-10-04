import { IIconSVGProps } from "@typings";

const UserIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3389_5194)">
        <path
          d="M14.5 16H13.1667V12.638C13.1661 12.1153 12.9583 11.6142 12.5887 11.2446C12.2191 10.875 11.718 10.6672 11.1953 10.6666H5.80466C5.282 10.6672 4.78089 10.875 4.41131 11.2446C4.04173 11.6142 3.83386 12.1153 3.83333 12.638V16H2.5V12.638C2.50106 11.7619 2.84957 10.9219 3.46908 10.3024C4.0886 9.68288 4.92854 9.33437 5.80466 9.33331H11.1953C12.0715 9.33437 12.9114 9.68288 13.5309 10.3024C14.1504 10.9219 14.4989 11.7619 14.5 12.638V16Z"
          fill="currentColor"
        />
        <path
          d="M8.5 8C7.70887 8 6.93552 7.7654 6.27772 7.32588C5.61992 6.88635 5.10723 6.26164 4.80448 5.53073C4.50173 4.79983 4.42252 3.99556 4.57686 3.21964C4.7312 2.44372 5.11216 1.73098 5.67157 1.17157C6.23098 0.612164 6.94371 0.231201 7.71964 0.0768606C8.49556 -0.0774802 9.29983 0.00173314 10.0307 0.304484C10.7616 0.607234 11.3863 1.11992 11.8259 1.77772C12.2654 2.43552 12.5 3.20887 12.5 4C12.4989 5.06054 12.0772 6.07734 11.3273 6.82726C10.5773 7.57717 9.56054 7.99894 8.5 8V8ZM8.5 1.33333C7.97258 1.33333 7.45701 1.48973 7.01848 1.78275C6.57995 2.07577 6.23815 2.49224 6.03632 2.97951C5.83449 3.46678 5.78168 4.00296 5.88457 4.52024C5.98747 5.03752 6.24144 5.51268 6.61438 5.88562C6.98732 6.25856 7.46248 6.51253 7.97976 6.61543C8.49704 6.71832 9.03322 6.66551 9.52049 6.46368C10.0078 6.26184 10.4242 5.92005 10.7172 5.48152C11.0103 5.04299 11.1667 4.52742 11.1667 4C11.1667 3.29276 10.8857 2.61448 10.3856 2.11438C9.88552 1.61429 9.20724 1.33333 8.5 1.33333Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3389_5194">
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

export default UserIcon;