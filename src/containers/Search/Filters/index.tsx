import Checkbox from "@designs/Checkbox";
import RangePrice from "../RangePrice";
import FilterItem from "./FilterItem";
import { FilterContainer } from "./styles";

interface IFiltersProps {
  className?: string;
  minPrice: number;
  maxPrice: number;
  onClick?: () => void;
}

const Filters: React.FC<IFiltersProps> = ({
  minPrice,
  maxPrice,
  className,
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <FilterContainer className={className}>
      <FilterItem className="border-t-2" title="Giá">
        <RangePrice
          min={Math.round(minPrice)}
          max={Math.round(maxPrice)}
          step={0.1}
        />
      </FilterItem>
      <FilterItem title="Khuyến mại">
        <div className="flex flex-col gap-1.5 py-2">
          <Checkbox
            label="Chỉ sản phẩm khuyến mãi"
            initialCheck={false}
            onChange={handleClick}
          />
          <Checkbox label="Ẩn sản phẩm khuyến mãi" initialCheck={false} />
        </div>
      </FilterItem>
    </FilterContainer>
  );
};

export default Filters;
