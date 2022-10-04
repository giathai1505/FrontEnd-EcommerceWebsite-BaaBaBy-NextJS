import COLORS from "@constants/color";
import NextNProgress from "nextjs-progressbar";

const TopProgressBar: React.FC = () => {
  return (
    <NextNProgress
      color={`${COLORS["primary-1"]}`}
      options={{
        showSpinner: false,
      }}
    />
  );
};

export default TopProgressBar;
