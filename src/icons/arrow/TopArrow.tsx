import { IIconSVGProps } from "@typings";

const TopArrow: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 0 24 8"
      width="24"
      height="24"
      {...props}
    >
      <path d="M0 8c7 0 10-8 12-8s5 8 12 8z"></path>
    </svg>
  );
};

export default TopArrow;
