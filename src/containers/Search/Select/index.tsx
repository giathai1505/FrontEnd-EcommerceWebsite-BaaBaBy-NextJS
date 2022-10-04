import DownIcon from "@icons/arrow/DownArrow";
import { useEffect, useRef, useState } from "react";
import { OptionItem, OptionList, Placeholder, SelectContainer } from "./styles";

interface IOption {
  _id: string;
  name: string;
}

interface ISelectProps {
  className?: string;
  options: IOption[];
  defaultOption: IOption;
  placeholder?: string;
  onChange: () => void;
}

const Select: React.FC<ISelectProps> = ({
  className,
  options,
  defaultOption,
  placeholder,
  onChange,
}) => {
  const [optionSelected, setOptionSelected] = useState(defaultOption);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const optionsRender = [
    optionSelected,
    ...options.filter(option => option._id !== optionSelected._id),
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const selectEl = selectRef.current;
      if (!selectEl) return;

      const isClickOutside = !selectEl.contains(e.target as Node);
      if (isClickOutside) {
        setShowOptions(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <SelectContainer
      className={className}
      ref={selectRef}
      onClick={() => {
        setShowOptions(!showOptions);
      }}
    >
      <span className="flex-1">{optionSelected.name}</span>
      <DownIcon width="14px" height="14px" />
      <OptionList visible={showOptions}>
        {placeholder && <Placeholder>{placeholder}</Placeholder>}
        {optionsRender.map(option => (
          <OptionItem
            key={option._id}
            active={option._id === optionSelected._id}
            onClick={() => setOptionSelected(option)}
          >
            {option.name}
          </OptionItem>
        ))}
      </OptionList>
    </SelectContainer>
  );
};

export default Select;
