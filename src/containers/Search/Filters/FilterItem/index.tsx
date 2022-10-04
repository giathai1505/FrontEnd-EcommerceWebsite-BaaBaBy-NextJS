import DownIcon from "@icons/arrow/DownArrow";
import { ReactNode, useState } from "react";
import {
  ContentWrapper,
  FilterItemContainer,
  Icon,
  TitleWrapper,
} from "./styles";

interface IFilterItem {
  className?: string;
  title: string;
  children: ReactNode;
}

const FilterItem: React.FC<IFilterItem> = ({ title, className, children }) => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <FilterItemContainer className={className}>
      <TitleWrapper onClick={handleShowContent}>
        <span className="flex-1">{title}</span>
        <Icon isRotate={showContent} width={"12px"} height={"12px"} />
      </TitleWrapper>
      <ContentWrapper style={{ maxHeight: showContent ? "120px" : "0px" }}>
        {children}
      </ContentWrapper>
    </FilterItemContainer>
  );
};

export default FilterItem;
