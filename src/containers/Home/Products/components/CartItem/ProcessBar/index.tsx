import { ReactNode } from "react";
import { ProcessBarContainer, ProcessBarFill, ProcessBarText } from "./styles";

interface IProcesBar {
  fill: number;
  children: ReactNode;
}

const ProcessBar: React.FC<IProcesBar> = ({ fill, children }) => {
  return (
    <ProcessBarContainer>
      <ProcessBarText>{children}</ProcessBarText>
      <ProcessBarFill style={{ width: `${fill}%` }} />
    </ProcessBarContainer>
  );
};

export default ProcessBar;
