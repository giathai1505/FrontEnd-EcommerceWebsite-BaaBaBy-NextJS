import ResultItem from "@layouts/Header/ResultItem";
import Link from "next/link";
import { Keyword, KeywordList, Line, ResultBox, ResultList } from "./styles";

interface ISearchResultsProps {
  keyword?: string;
}

const RESULTS = [
  {
    id: "1",
    image: "/ingredient/images/similar4.png",
    name: "Product 1",
    price: 1000,
    slug: "product-1",
  },
  {
    id: "2",
    image: "/ingredient/images/similar4.png",
    name: "Product 2",
    price: 2000,
    slug: "product-2",
  },
  {
    id: "3",
    image: "/ingredient/images/similar4.png",
    name: "Product 3",
    price: 3000,
    discountPrice: 2500,
    slug: "product-3",
  },
  {
    id: "4",
    image: "/ingredient/images/similar4.png",
    name: "Product 4",
    price: 4000,
    slug: "product-4",
  },
  {
    id: "5",
    image: "/ingredient/images/similar4.png",
    name: "Product 5",
    price: 5000,
    slug: "product-5",
  },
  {
    id: "6",
    image: "/ingredient/images/similar4.png",
    name: "Product 6",
    price: 6000,
    slug: "product-6",
  },
  {
    id: "7",
    image: "/ingredient/images/similar4.png",
    name: "Product 7",
    price: 7000,
    slug: "product-7",
  },
  {
    id: "8",
    image: "/ingredient/images/similar4.png",
    name: "Product 8",
    price: 8000,
    slug: "product-8",
  },
  {
    id: "9",
    image: "/ingredient/images/similar9.png",
    name: "Product 9",
    price: 9000,

    slug: "product-9",
  },
  {
    id: "10",
    image: "/ingredient/images/similar4.png",
    name: "Product 10",
    price: 10000,
    slug: "product-10",
  },
];

const KEYWORD = [
  {
    id: "1",
    keyword: "Product 1",
  },
  {
    id: "2",
    keyword: "Product 2",
  },
  {
    id: "3",
    keyword: "Product 3",
  },
  {
    id: "4",
    keyword: "Product 4",
  },
];
// const RESULTS = [];
const SHOW_MAX_ITEM = 8;

const SearchResults: React.FC<ISearchResultsProps> = ({ keyword = "" }) => {
  return (
    <ResultBox className="max-h-screen overflow-auto">
      {KEYWORD?.length > 0 && (
        <KeywordList>
          <Link href="#">
            <Keyword>a</Keyword>
          </Link>
          <Link href="#">
            <Keyword>a</Keyword>
          </Link>
          <Link href="#">
            <Keyword>a</Keyword>
          </Link>
          <Link href="#">
            <Keyword>a</Keyword>
          </Link>
        </KeywordList>
      )}
      <Line />
      {/* {RESULTS?.length > 0 && (
        <ResultList>
          {RESULTS.slice(0, SHOW_MAX_ITEM).map(result => {
            return <ResultItem {...result} />;
          })}
        </ResultList>
      )} */}
    </ResultBox>
  );
};

export default SearchResults;
