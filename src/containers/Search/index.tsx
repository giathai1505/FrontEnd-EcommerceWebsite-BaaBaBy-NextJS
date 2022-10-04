import CardProduct from "@components/CardProduct";
import { useAppSelector } from "@redux/store";
import { fragmentSearchProduct } from "@services/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product, useSearchProduct } from "src/apiCaller";
import Filters from "./Filters";
import NotFound from "./NotFound";
import Select from "./Select";
import { ActionBox, PageContainer, Title } from "./styles";

const OPTIONS = [
  {
    _id: "1",
    name: "Từ thấp - cao",
  },
  {
    _id: "2",
    name: "Từ cao - thấp",
  },
  {
    _id: "3",
    name: "Bán chạy nhất",
  },
];

const OPTIONS2 = [
  {
    _id: "1",
    name: "Xem 60 sản phẩm / trang",
  },
  {
    _id: "2",
    name: "Xem 120 sản phẩm / trang",
  },
];

interface ISearchProps {}

const Search: React.FC<ISearchProps> = () => {
  if (typeof window === "undefined") return <></>;

  const minPriceFilter = useAppSelector(state => state.searchProduct.min);
  const maxPriceFilter = useAppSelector(state => state.searchProduct.max);

  const router = useRouter();
  const [results, setResults] = useState<Product[]>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);
  const { q } = router.query;

  const [searchProduct, { data }] = useSearchProduct(fragmentSearchProduct);

  useEffect(() => {
    if (!q) return;
    console.log(minPriceFilter, maxPriceFilter);

    searchProduct({
      variables: {
        search: {
          filter: {
            name: q as string,
          },
        },
      },
    });
  }, [q, minPriceFilter, maxPriceFilter]);

  useEffect(() => {
    setResults(data?.searchProduct.results);
    setMinPrice(data?.searchProduct.minPrice || 0);
    setMaxPrice(data?.searchProduct.maxPrice || 1);
  }, [data]);

  const handleClick = () => {
    router.push("search?q=test");
  };

  if (!results || results.length === 0) {
    return <NotFound />;
  }

  return (
    <PageContainer>
      <Title>Kết quả tìm kiếm cho '{q}'</Title>
      <ActionBox>
        <Select
          className="w-[250px]"
          options={OPTIONS}
          defaultOption={OPTIONS[0]}
          placeholder={"Sắp xếp theo"}
          onChange={() => {}}
        />
        <p>{results.length} SẢN PHẨM</p>
        <Select
          className="w-[240px]"
          options={OPTIONS2}
          defaultOption={OPTIONS2[0]}
          onChange={() => {}}
        />
      </ActionBox>
      <div className="grid grid-cols-4">
        <Filters
          className="col-span-1 mr-3"
          minPrice={minPrice}
          maxPrice={maxPrice === minPrice ? maxPrice + 1 : maxPrice}
          onClick={handleClick}
        />
        <div className="col-span-3 grid grid-cols-3 gap-2">
          {results.map(product => (
            <CardProduct
              key={product._id}
              href={`/detail/${product.slug}`}
              name={product.name}
              image={product.imgUrl[0]}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Search;
