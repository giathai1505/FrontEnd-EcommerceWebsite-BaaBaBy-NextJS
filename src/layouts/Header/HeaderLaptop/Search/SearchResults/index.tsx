import ResultItem from "@layouts/Header/ResultItem";
import { useAppSelector } from "@redux/store";
import Link from "next/link";
import { Keyword, KeywordList, Line, ResultBox, ResultList } from "./styles";

const SHOW_MAX_ITEM = 8;

const SearchResults: React.FC = () => {
  if (typeof window === undefined) return;

  const { results, listKeyword } = useAppSelector(state => {
    return state.searchProduct?.results || { results: [], listKeyword: [] };
  });

  if (results.length === 0 && listKeyword.length === 0) {
    return <></>;
  }

  return (
    <ResultBox>
      {listKeyword?.length > 0 && (
        <KeywordList>
          {listKeyword.map((keyword, index) => (
            <Link href={`/search?q=${keyword}`}>
              <Keyword key={index}>{keyword}</Keyword>
            </Link>
          ))}
        </KeywordList>
      )}
      <Line />
      {results?.length > 0 && (
        <ResultList>
          {results.slice(0, SHOW_MAX_ITEM).map(result => {
            return <ResultItem {...result} />;
          })}
        </ResultList>
      )}
    </ResultBox>
  );
};

export default SearchResults;
