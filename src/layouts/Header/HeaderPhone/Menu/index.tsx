import { useEffect, useRef, useState } from "react";

import HamburgerIcon from "@icons/Hamburger";
import SlidingDoor from "./SlidingDoor";
import { ActionBox, ButtonStyled, MenuContainer } from "./styles";
import SearchIcon from "@icons/Search";
import Search from "./Search";

interface IMenuProps {}

const Menu: React.FC<IMenuProps> = () => {
  const [showSlidingDoor, setShowSlidingDoor] = useState(false);
  const [showSearhInput, setShowSearchInput] = useState(false);
  const slidingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const slidingDoorEl = slidingRef.current;

      if (!slidingDoorEl) return;

      if (showSlidingDoor && !slidingDoorEl.contains(e.target as Node)) {
        setShowSlidingDoor(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSlidingDoor]);

  const handleToggleSearchInput = () => {
    setShowSearchInput(!showSearhInput);
    setShowSlidingDoor(false);
  };

  const handleHiddenSearchInput = () => {
    setShowSearchInput(false);
  };

  const handleHamburgerClick = () => {
    if (!showSlidingDoor) {
      setShowSearchInput(false);
    }

    setShowSlidingDoor(!showSlidingDoor);
  };

  return (
    <MenuContainer ref={slidingRef}>
      <ActionBox>
        <ButtonStyled onClick={handleToggleSearchInput}>
          <SearchIcon />
        </ButtonStyled>
        <ButtonStyled onClick={handleHamburgerClick}>
          <HamburgerIcon />
        </ButtonStyled>
      </ActionBox>

      {showSearhInput && <Search onHidden={handleHiddenSearchInput} />}

      {<SlidingDoor visible={showSlidingDoor} />}
    </MenuContainer>
  );
};

export default Menu;
