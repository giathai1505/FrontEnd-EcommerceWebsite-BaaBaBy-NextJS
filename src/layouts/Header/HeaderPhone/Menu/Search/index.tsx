import { GrClose } from "react-icons/gr";
import SearchResults from "./SearchResults";
import {
  SearchContainer,
  SearchContent,
  SearchInput,
  ButtonHiddenSearch,
} from "./styled";

interface ISearchProps {
  onHidden: () => void;
}

const Search: React.FC<ISearchProps> = ({ onHidden }) => {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchInput
          type="text"
          placeholder="Tìm sản phẩm, danh mục..."
          spellCheck={false}
        />
        <ButtonHiddenSearch onClick={onHidden}>
          <GrClose fontSize="16px" />
        </ButtonHiddenSearch>
      </SearchContent>
      {/* <SearchResults /> */}
    </SearchContainer>
  );
};

export default Search;
