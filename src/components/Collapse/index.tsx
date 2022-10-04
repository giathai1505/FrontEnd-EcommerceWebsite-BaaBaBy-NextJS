import { CollapseContainer } from "./styles";

type ICollapseProps = {
  className?: string;
  show: boolean;
  /**
   * Estimate height is that you have to estimate the height of children
   */
} & (
  | {
      smooth: true;
      estimateHeight: number;
    }
  | {
      smooth?: false;
      readonly estimateHeight?: 0;
    }
);

const Collapse: React.FC<ICollapseProps> = ({
  children,
  estimateHeight = 1000,
  className,
  smooth = false,
  show,
}) => {
  return (
    <CollapseContainer
      estimateHeight={estimateHeight}
      smooth={smooth}
      className={`${show && "open"} ${className}`}
    >
      {children}
    </CollapseContainer>
  );
};

export default Collapse;
