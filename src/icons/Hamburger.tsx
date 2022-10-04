import { IIconSVGProps } from "@typings";

const HamburgerIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6.032a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm1 5.032a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3z"
      />
    </svg>
  );
};

export default HamburgerIcon;
