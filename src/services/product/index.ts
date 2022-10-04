import { GenFields, Product, ResultSearch } from "src/apiCaller";

export const fragmentGetAllProduct: GenFields<ResultSearch> = [
  { results: ["_id", "name", "price", "imgUrl", "displayPrice"] },
];

export const fragmentGetAllDiscountProducts: GenFields<ResultSearch> = [
  "totalCount",
  { results: ["_id", "discount", "price", "imgUrl", "name", "slug"] },
];

export const fragmentGetProductBySlug: GenFields<Product> = [
  "_id",
  "name",
  "price",
  "imgUrl",
];

export const fragmentSearchProduct: GenFields<ResultSearch> = [
  "listKeyword",
  "totalCount",
  "minPrice",
  "maxPrice",

  { results: ["_id", "name", "originalPrice", "price", "imgUrl", "slug"] },
];

export const fragmentGetProductsByCategory: GenFields<ResultSearch> = [
  "totalCount",
  { results: ["_id", "discount", "price", "imgUrl", "name", "slug"] },
];
