import { renderPrice } from "@common/functions";
import { PATH } from "@routes";
import { fragmentGetAllDiscountProducts } from "@services/product";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Product, useSearchProduct } from "src/apiCaller";
import { useElementSize } from "usehooks-ts";
import CardItem from "../components/CartItem";
import ProcessBar from "../components/CartItem/ProcessBar";
import Title from "../components/Title";
import { LightningIcon } from "../icons";
import { PriceContainer, Price } from "../styles";
import {
  Button,
  Discount,
  HeadingContainer,
  ProductBox,
  ProductList,
  SaleContainer,
} from "./styles";
import TimeBox from "./TimeBox";

const TIME = 86400;

const getCol = () => {
  if (typeof window === "undefined") {
    return 4;
  }

  const currentViewport =
    document.documentElement.clientWidth || window.innerWidth;

  if (currentViewport < 640) {
    return 2;
  } else if (currentViewport < 1024) {
    return 3;
  }

  return 4;
};

const SaleSection: React.FC = () => {
  if (typeof window === undefined) return;

  // RESPONSE
  const [squareRef, { width }] = useElementSize();
  const [widthElement, setWidthElement] = useState(0);
  const [widthScrollView, setWidthScrollView] = useState(0);
  const [showButtonLeft, setShowButtonLeft] = useState(true);
  const [showButtonRight, setShowButtonRight] = useState(true);
  const [col, setCol] = useState(() => getCol());

  // DATA
  const [getDiscountProducts, { data }] = useSearchProduct(
    fragmentGetAllDiscountProducts,
  );
  const [countDiscountProducts, setCountDiscountProducts] = useState(0);
  const [discountProducts, setDiscountProducts] = useState<Product[]>([]);
  const [currentPositionItem, setCurrentPositionItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCountDiscountProducts(prev => data?.searchProduct.totalCount || prev);
  }, [data]);

  useEffect(() => {
    const results = data?.searchProduct.results || [];
    setDiscountProducts(prev => [...prev, ...results]);
  }, [data]);

  useEffect(() => {
    getDiscountProducts({
      variables: {
        search: {
          filter: {
            isDiscount: true,
          },
        },
      },
    });
  }, []);

  useEffect(() => {
    getDiscountProducts({
      variables: {
        search: {
          filter: {
            isDiscount: true,
          },
          page: currentPage,
          size: 8,
        },
      },
    });
  }, [currentPage]);

  useLayoutEffect(() => {
    const handleResponsive = () => {
      setCol(getCol());
    };

    window.addEventListener("resize", handleResponsive);

    return () => {
      window.removeEventListener("resize", handleResponsive);
    };
  }, []);

  useLayoutEffect(() => {
    const currWidth =
      widthElement * currentPositionItem + currentPositionItem * gap;

    setWidthScrollView(currWidth);
  }, [currentPositionItem, widthElement]);

  useEffect(() => {
    setWidthElement(calcWidthElement(width, col));
  }, [width, col]);

  useEffect(() => {
    const numberOfProducts = countDiscountProducts;

    if (numberOfProducts === 0) {
      return;
    }

    if (currentPositionItem <= 0) {
      setShowButtonLeft(false);
    } else {
      setShowButtonLeft(true);
    }

    if (currentPositionItem >= numberOfProducts - col) {
      setShowButtonRight(false);
    } else {
      setShowButtonRight(true);
    }
  }, [currentPositionItem, col, widthElement]);

  let gap = 20;

  const calcWidthElement = (width: number, col: number) => {
    return (width - (col - 1) * gap) / col;
  };

  const handleLeftClick = () => {
    const current = currentPositionItem - col;
    setCurrentPositionItem(current < 0 ? 0 : current);
  };

  const handleRightClick = () => {
    const current = currentPositionItem + col;
    const shouldLoadMore = discountProducts.length <= current + col * 2;

    setCurrentPositionItem(current);

    if (shouldLoadMore) {
      if (currentPage > Math.ceil(countDiscountProducts / 8)) return;
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    discountProducts?.length > 0 && (
      <SaleContainer>
        <Title description={`${countDiscountProducts} khuyến mãi`}>
          <HeadingContainer>
            <LightningIcon /> Flash Sale <TimeBox countdown={TIME} />
          </HeadingContainer>
        </Title>
        <ProductBox ref={squareRef}>
          <ProductList
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${widthScrollView}px)`,
            }}
          >
            {discountProducts.map(product => {
              const discountPrice = Math.round(
                product.price - product.price * (product.discount / 100),
              );

              const displayPrice = renderPrice(discountPrice);

              return (
                <CardItem
                  image={product.imgUrl[0]}
                  href={`/detail/${product.slug}`}
                  key={product._id}
                  style={{ width: widthElement + "px" }}
                  className="shrink-0"
                >
                  <PriceContainer className="mt-[24px] mb-[12px]">
                    <Price>{displayPrice}</Price>
                    <Discount>-{product.discount}%</Discount>
                  </PriceContainer>
                  <ProcessBar fill={20}>Đã bán 2</ProcessBar>
                </CardItem>
              );
            })}
          </ProductList>
          {showButtonLeft && (
            <Button className="left-0" onClick={handleLeftClick}>
              <FaChevronLeft className="text-inherit text-white-color" />
            </Button>
          )}
          {showButtonRight && (
            <Button className="right-0" onClick={handleRightClick}>
              <FaChevronRight className="text-inherit text-white-color" />
            </Button>
          )}
        </ProductBox>
      </SaleContainer>
    )
  );
};

export default SaleSection;
