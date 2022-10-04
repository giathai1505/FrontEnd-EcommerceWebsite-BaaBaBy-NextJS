import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

import SearchIcon from "@icons/Search";
import {
  ButtonClear,
  Loading,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/store";
import { setResults, setSearchText } from "@redux/slides/searchProduct";
import { fragmentSearchProduct } from "@services/product";
import { useSearchProduct } from "src/apiCaller";
import SearchResults from "./SearchResults";
import { useRouter } from "next/router";

interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchProduct, { data, loading, error }] = useSearchProduct(
    fragmentSearchProduct,
  );
  const router = useRouter();
  const timerId = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchText = useAppSelector(state => state.searchProduct.searchText);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchText) {
      dispatch(setResults(null));
      return;
    }

    const fetchData = () => {
      searchProduct({
        variables: {
          search: {
            filter: {
              name: searchText,
            },
          },
        },
      });
    };

    timerId.current = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [searchText]);

  useEffect(() => {
    dispatch(setResults(data?.searchProduct));
  }, [data]);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleClearSearchText = () => {
    dispatch(setSearchText(""));
  };

  const handleSearch = useCallback(
    (e: KeyboardEvent) => {
      const inputEl = inputRef.current;
      if (!inputEl) return;

      if (e.key === "Enter") {
        router.push(`/search?q=${inputEl.value}`);
        handleClearSearchText();
      }
    },
    [inputRef],
  );

  const handleFocusSearch = () => {
    document.addEventListener("keydown", handleSearch);
  };

  const handleFocusOutSearch = () => {
    document.removeEventListener("keydown", handleSearch);
  };

  return (
    <SearchContainer onFocus={handleFocusSearch} onBlur={handleFocusOutSearch}>
      <SearchInput
        type="text"
        placeholder="Tìm sản phẩm, danh mục..."
        spellCheck={false}
        value={searchText}
        onChange={handleSearchTextChange}
        ref={inputRef}
      />
      {!loading && searchText && (
        <ButtonClear onClick={handleClearSearchText}>
          <BsFillXCircleFill />
        </ButtonClear>
      )}

      {loading && <Loading />}

      <SearchButton>
        <SearchIcon color="white" />
      </SearchButton>

      <SearchResults />
    </SearchContainer>
  );
};

export default Search;
