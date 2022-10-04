/* eslint-disable */

// *******************************************************
// *******************************************************
// USUM SOFTWARE
// GENERATED FILE, DO NOT MODIFY
//
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

type NonNullable<T> = Exclude<T, null | undefined>;

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

type KeysNotMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? never : K;
}[keyof T];

type MatchingType = string | number | boolean | string[] | number[] | boolean[];

type FilterMaybe<T> = { [k in keyof T]: NonNullable<T[k]> };

type GenFieldsAll<T> = (
  | KeysMatching<T, MatchingType>
  | {
      [k in KeysNotMatching<T, MatchingType>]?: T[k] extends any[]
        ? GenFields<T[k][number]>
        : GenFields<T[k]>;
    }
)[];

export type GenFields<T> = T extends any[]
  ? GenFieldsAll<FilterMaybe<T[number]>>
  : GenFieldsAll<FilterMaybe<T>>;

const queryBuilder = <T>(fields?: GenFields<T>): string => {
  return fields
    ? fields
        .map((field: any) => {
          if (typeof field === "object") {
            let result = "";

            Object.entries<any>(field as Record<string, any>).forEach(
              ([key, values], index, array) => {
                result += `${key} ${
                  values.length > 0 ? "{ " + queryBuilder(values) + " }" : ""
                }`;

                // If it's not the last item in array, join with comma
                if (index < array.length - 1) {
                  result += ", ";
                }
              },
            );

            return result;
          } else {
            return `${field}`;
          }
        })
        .join("\n ")
    : "";
};

const guessFragmentType = (fragment: string | DocumentNode) => {
  let isString = false;
  let isFragment = false;
  let fragmentName = "";
  if (typeof fragment === "string") {
    isString = true;
  } else if (typeof fragment === "object" && fragment.definitions.length) {
    isFragment = true;
    const definition = fragment.definitions[0];
    if (definition.kind === "FragmentDefinition") {
      fragmentName = definition.name.value;
    } else {
      throw new Error(
        `The argument passed is not a fragment definition, got ${definition.kind} instead`,
      );
    }
  }
  return { isString, isFragment, fragmentName };
};

import {
  useMutation,
  useLazyQuery,
  useSubscription,
  QueryHookOptions,
  MutationHookOptions,
  SubscriptionHookOptions,
  MutationTuple,
} from "@apollo/client";

import { OperationDefinitionNode } from "graphql";
import { ApolloClient, execute, DocumentNode, gql } from "@apollo/client/core";

export interface CartInput {
  productId: string;
  quantity: number;
}

export interface Category {
  _id: string;
  child: Maybe<Category[]>;
  code: CategoryEnum;
  level: number;
  name: Maybe<string>;
  parent: Maybe<Category>;
  slug: string;
}

export enum CategoryEnum {
  Home = "HOME",
  Sport = "SPORT",
}
export interface CategoryGetByParentAndLevel {
  categoryId?: string;
  level?: number;
  parent?: string;
}

export interface CategoryGetOneInput {
  _id: string;
}

export interface CategoryInput {
  code: CategoryEnum;
  level?: number;
  name?: string;
  parentId?: string;
}

export interface CreateOrderInput {
  address: string;
  phonenumber?: string;
  username?: string;
}

export interface CreateProductInput {
  category: string;
  discount?: number;
  imgUrl?: string[];
  name?: string;
  price: number;
  quantity: number;
  title?: string;
}

export interface District {
  code: Maybe<number>;
  codename: Maybe<string>;
  division_type: Maybe<string>;
  name: Maybe<string>;
  province_code: Maybe<number>;
}

export interface FilterProduct {
  categoryId?: string;
  isDiscount?: boolean;
  maxPrice?: number;
  /** @default 0*/
  minPrice?: number;
  name?: string;
  productId?: string;
}

export enum FilterStatistics {
  Lastyear = "LASTYEAR",
  Sevendaysago = "SEVENDAYSAGO",
  Thirtydaysago = "THIRTYDAYSAGO",
  Thisyear = "THISYEAR",
}

export enum GenderEnum {
  Female = "FEMALE",
  Lgbt = "LGBT",
  Male = "MALE",
}

export interface IJwtPayload {
  _id: Maybe<string>;
}

export interface JwtPayload {
  accessToken: Maybe<string>;
  payload: Maybe<IJwtPayload>;
  refreshToken: Maybe<string>;
  userInfo: Maybe<User>;
}

export interface LineItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface Order {
  _id: string;
  address: string;
  createAt: string;
  phonenumber: string;
  totalPrice: number;
  totalQuantity: number;
  updateAt: string;
  user: User;
  username: string;
}

export interface Product {
  _id: string;
  category: Category;
  createAt: Maybe<string>;
  discount: Maybe<number>;
  displayPrice: string;
  imgUrl: string[];
  name: Maybe<string>;
  originalPrice: Maybe<number>;
  price: number;
  quantity: Maybe<number>;
  rating: Maybe<number>;
  slug: Maybe<string>;
  title: Maybe<string>;
  updateAt: Maybe<string>;
}

export interface Province {
  code: Maybe<number>;
  codename: Maybe<string>;
  name: Maybe<string>;
  phone_code: Maybe<number>;
}

export interface RegisterInput {
  confirmpassword: string;
  email: string;
  password: string;
  phonenumber?: string;
  username?: string;
}

export interface ResetPasswordInput {
  code: string;
  confirmpassword: string;
  password: string;
  userId: string;
}

export interface ResultSearch {
  listKeyword: Maybe<string[]>;
  maxPrice: Maybe<number>;
  minPrice: Maybe<number>;
  results: Maybe<Product[]>;
  totalCount: Maybe<number>;
}

export interface ReviewInput {
  productId: string;
  rating: number;
}

export enum RoleEnum {
  Admin = "ADMIN",
  User = "USER",
}
export interface SearchProductInput {
  filter?: FilterProduct;
  page?: number;
  size?: number;
  sort?: SortProductEnum;
}

export enum SortProductEnum {
  Az = "AZ",
  Bestseller = "BESTSELLER",
  Decrease_price = "DECREASE_PRICE",
  Increase_price = "INCREASE_PRICE",
  Latest = "LATEST",
  Za = "ZA",
}
export interface StatisticOrder {
  date: Maybe<number>;
  month: Maybe<number>;
  totalPrice: number;
  year: Maybe<number>;
}

export interface UpdateProduct {
  name?: string;
  price?: number;
  quantity?: number;
  rating?: number;
}

export interface UpdateUserInput {
  phonenumber?: string;
  username?: string;
}

export interface User {
  _id: Maybe<string>;
  address: Maybe<string>;
  createAt: Maybe<string>;
  email: Maybe<string>;
  gender: Maybe<GenderEnum>;
  keyword: Maybe<string>;
  phonenumber: Maybe<string>;
  role: Maybe<RoleEnum>;
  slug: Maybe<string>;
  updateAt: Maybe<string>;
  username: Maybe<string>;
}

export interface Wards {
  code: Maybe<number>;
  codename: Maybe<string>;
  district_code: Maybe<number>;
  division_type: Maybe<string>;
  name: Maybe<string>;
}

export interface AverageRatingArgs {
  productId: string;
}

export interface CheckExistsReviewArgs {
  productId: string;
}

export interface ConfirmMailArgs {
  token: string;
}

export interface CountReviewArgs {
  productId: string;
}

export interface FakeDataProductArgs {}

export interface GetCategoryByIdArgs {
  input: CategoryGetOneInput;
}

export interface GetCategoryByParentIdAndLevelArgs {
  input: CategoryGetByParentAndLevel;
}

export interface GetChildIdCategoryArgs {
  categoryId: string;
}

export interface GetChildOfCategoryArgs {
  categoryId: string;
}

export interface GetDistrictArgs {
  province_code: number;
}

export interface GetListItemCartArgs {}

export interface GetProductBySlugArgs {
  slug: string;
}

export interface GetProvinceArgs {}

export interface GetWardsArgs {
  district_code: number;
}

export interface RefreshTokenArgs {}

export interface ResetCacheArgs {}

export interface SearchProductArgs {
  search: SearchProductInput;
}

export interface StatisticArgs {
  input: FilterStatistics;
}

export interface StatisticOrderArgs {
  input: FilterStatistics;
}

export interface TestArgs {}

export interface AddItemToCartArgs {
  input: CartInput;
}

export interface CreateCategoryArgs {
  input: CategoryInput;
}

export interface CreateOrderArgs {
  input: CreateOrderInput;
}

export interface CreateProductArgs {
  input: CreateProductInput;
}

export interface CreateReviewArgs {
  input: ReviewInput;
}

export interface DeleteItemCartArgs {
  products: string[];
}

export interface ForgotPasswordArgs {
  email: string;
}

export interface LoginArgs {
  input: LoginInput;
}

export interface RegisterArgs {
  input: RegisterInput;
}

export interface ResetPasswordArgs {
  input: ResetPasswordInput;
}

export interface UpdateItemCartArgs {
  input: CartInput;
}

export interface UpdateProductArgs {
  input: UpdateProduct;
  productId: string;
}

export interface UpdateReviewArgs {
  input: ReviewInput;
}

export interface UpdateUserArgs {
  input: UpdateUserInput;
}

export interface UploadFileArgs {
  file: File;
}

interface Abortable {
  $abort(): void;
}
interface WithArgs<T, A> {
  $args(args: A): ExecutableQuery<T>;
}
interface Pendable {
  pending: boolean;
}
interface Executable<T> {
  $fetch(): Promise<T>;
}
interface Nameble {
  __name: string;
}

export interface QueryWithArgs<T, A>
  extends WithArgs<T, A>,
    Abortable,
    Pendable,
    Nameble {}
export interface QueryWithOptionalArgs<T, A>
  extends QueryWithArgs<T, A>,
    Executable<T> {}

export interface ExecutableQuery<T>
  extends Abortable,
    Pendable,
    Nameble,
    Executable<T> {}
export type ExecutableQueryWithArgs<T, A> = QueryWithArgs<T, A>;
export interface ExecutableQueryWithOptionalArgs<T, A>
  extends QueryWithOptionalArgs<T, A>,
    Executable<T> {}

export const apiProvider = (apolloClient: ApolloClient<any>) => {
  const abortableQuery = <T, A = null>(
    query: DocumentNode,
    args: boolean,
    optionalArgs: boolean,
  ) => {
    let observableQuery: ZenObservable.Subscription;
    const parsedQuery = query.definitions[0] as OperationDefinitionNode;
    const queryName = parsedQuery?.name?.value;
    if (queryName) {
      let variables: { [x: string]: any } = {};
      let pending = false;

      const $abort = () => {
        if (observableQuery && !observableQuery.closed) {
          observableQuery.unsubscribe();
        }
      };
      const $fetch = async () => {
        pending = true;
        return new Promise<T>((resolve, reject) => {
          observableQuery = execute(apolloClient.link, {
            query,
            variables,
          }).subscribe({
            next: ({ data, errors }) => {
              if (data && queryName) {
                resolve(data[queryName]);
              } else {
                reject({ gqlErrors: errors, variables, query: queryName });
              }
            },
            error: error =>
              reject({ gqlErrors: [error], variables, query: queryName }),
            complete: () => {
              pending = false;
            },
          });
        });
      };
      const $args = (args: Record<string, any>) => {
        variables = args;
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        };
      };
      if (args && !optionalArgs) {
        return {
          $abort,
          $args,
          pending,
          __name: queryName,
        } as any;
      } else if (optionalArgs) {
        return {
          $abort,
          $args,
          $fetch,
          pending,
          __name: queryName,
        } as any;
      } else {
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        } as any;
      }
    } else {
      throw new Error("query argument is not a GraphQL definition");
    }
  };

  return {
    averageRating(): QueryWithArgs<number, AverageRatingArgs> {
      const queryTemplate = gql`
        query averageRating($productId: String!) {
          averageRating(productId: $productId)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    checkExistsReview(): QueryWithArgs<boolean, CheckExistsReviewArgs> {
      const queryTemplate = gql`
        query checkExistsReview($productId: String!) {
          checkExistsReview(productId: $productId)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    confirmMail(): QueryWithArgs<boolean, ConfirmMailArgs> {
      const queryTemplate = gql`
        query confirmMail($token: String!) {
          confirmMail(token: $token)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    countReview(): QueryWithArgs<number, CountReviewArgs> {
      const queryTemplate = gql`
        query countReview($productId: String!) {
          countReview(productId: $productId)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    fakeDataProduct(): ExecutableQuery<boolean> {
      const queryTemplate = gql`
        query fakeDataProduct {
          fakeDataProduct
        }
      `;
      return abortableQuery(queryTemplate, false, false);
    },
    getCategoryById(
      fields: GenFields<Category>,
    ): ExecutableQueryWithArgs<Category, GetCategoryByIdArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getCategoryById ($input: CategoryGetOneInput!) {
        getCategoryById(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    getCategoryByParentIdAndLevel(
      fields: GenFields<Category[]>,
    ): ExecutableQueryWithArgs<Category[], GetCategoryByParentIdAndLevelArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getCategoryByParentIdAndLevel ($input: CategoryGetByParentAndLevel!) {
        getCategoryByParentIdAndLevel(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    getChildIdCategory(): QueryWithArgs<string[], GetChildIdCategoryArgs> {
      const queryTemplate = gql`
        query getChildIdCategory($categoryId: String!) {
          getChildIdCategory(categoryId: $categoryId)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    getChildOfCategory(
      fields: GenFields<Category>,
    ): ExecutableQueryWithArgs<Category, GetChildOfCategoryArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getChildOfCategory ($categoryId: String!) {
        getChildOfCategory(categoryId: $categoryId) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    getDistrict(
      fields: GenFields<District[]>,
    ): ExecutableQueryWithArgs<District[], GetDistrictArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getDistrict ($province_code: Float!) {
        getDistrict(province_code: $province_code) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    getListItemCart(
      fields: GenFields<LineItem[]>,
    ): ExecutableQuery<LineItem[]> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getListItemCart  {
        getListItemCart {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, false, false);
    },
    getProductBySlug(
      fields: GenFields<Product>,
    ): ExecutableQueryWithArgs<Product, GetProductBySlugArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getProductBySlug ($slug: String!) {
        getProductBySlug(slug: $slug) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    getProvince(fields: GenFields<Province[]>): ExecutableQuery<Province[]> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getProvince  {
        getProvince {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, false, false);
    },
    getWards(
      fields: GenFields<Wards[]>,
    ): ExecutableQueryWithArgs<Wards[], GetWardsArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query getWards ($district_code: Float!) {
        getWards(district_code: $district_code) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    refreshToken(fields: GenFields<JwtPayload>): ExecutableQuery<JwtPayload> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query refreshToken  {
        refreshToken {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, false, false);
    },
    resetCache(): ExecutableQuery<string> {
      const queryTemplate = gql`
        query resetCache {
          resetCache
        }
      `;
      return abortableQuery(queryTemplate, false, false);
    },
    searchProduct(
      fields: GenFields<ResultSearch>,
    ): ExecutableQueryWithArgs<ResultSearch, SearchProductArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query searchProduct ($search: SearchProductInput!) {
        searchProduct(search: $search) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    statistic(
      fields: GenFields<User[]>,
    ): ExecutableQueryWithArgs<User[], StatisticArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query statistic ($input: FilterStatistics!) {
        statistic(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    statisticOrder(
      fields: GenFields<StatisticOrder[]>,
    ): ExecutableQueryWithArgs<StatisticOrder[], StatisticOrderArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      query statisticOrder ($input: FilterStatistics!) {
        statisticOrder(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    test(): ExecutableQuery<string> {
      const queryTemplate = gql`
        query test {
          test
        }
      `;
      return abortableQuery(queryTemplate, false, false);
    },
    addItemToCart(): QueryWithArgs<boolean, AddItemToCartArgs> {
      const queryTemplate = gql`
        mutation addItemToCart($input: CartInput!) {
          addItemToCart(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    createCategory(): QueryWithArgs<boolean, CreateCategoryArgs> {
      const queryTemplate = gql`
        mutation createCategory($input: CategoryInput!) {
          createCategory(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    createOrder(): QueryWithArgs<boolean, CreateOrderArgs> {
      const queryTemplate = gql`
        mutation createOrder($input: CreateOrderInput!) {
          createOrder(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    createProduct(): QueryWithArgs<boolean, CreateProductArgs> {
      const queryTemplate = gql`
        mutation createProduct($input: CreateProductInput!) {
          createProduct(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    createReview(): QueryWithArgs<boolean, CreateReviewArgs> {
      const queryTemplate = gql`
        mutation createReview($input: ReviewInput!) {
          createReview(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    deleteItemCart(): QueryWithArgs<boolean, DeleteItemCartArgs> {
      const queryTemplate = gql`
        mutation deleteItemCart($products: [String!]!) {
          deleteItemCart(products: $products)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    forgotPassword(): QueryWithArgs<boolean, ForgotPasswordArgs> {
      const queryTemplate = gql`
        mutation forgotPassword($email: String!) {
          forgotPassword(email: $email)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    login(
      fields: GenFields<JwtPayload>,
    ): ExecutableQueryWithArgs<JwtPayload, LoginArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      mutation login ($input: LoginInput!) {
        login(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    register(): QueryWithArgs<boolean, RegisterArgs> {
      const queryTemplate = gql`
        mutation register($input: RegisterInput!) {
          register(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    resetPassword(): QueryWithArgs<boolean, ResetPasswordArgs> {
      const queryTemplate = gql`
        mutation resetPassword($input: ResetPasswordInput!) {
          resetPassword(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    updateItemCart(): QueryWithArgs<boolean, UpdateItemCartArgs> {
      const queryTemplate = gql`
        mutation updateItemCart($input: CartInput!) {
          updateItemCart(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    updateProduct(): QueryWithArgs<boolean, UpdateProductArgs> {
      const queryTemplate = gql`
        mutation updateProduct($input: UpdateProduct!, $productId: String!) {
          updateProduct(input: $input, productId: $productId)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    updateReview(): QueryWithArgs<boolean, UpdateReviewArgs> {
      const queryTemplate = gql`
        mutation updateReview($input: ReviewInput!) {
          updateReview(input: $input)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
    updateUser(
      fields: GenFields<User>,
    ): ExecutableQueryWithArgs<User, UpdateUserArgs> {
      const fragment = queryBuilder(fields);
      let isString = false;
      let isFragment = false;
      let fragmentName = "";
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment));

      const queryTemplate = gql`
      mutation updateUser ($input: UpdateUserInput!) {
        updateUser(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

      return abortableQuery(queryTemplate, true, false);
    },
    uploadFile(): QueryWithArgs<string, UploadFileArgs> {
      const queryTemplate = gql`
        mutation uploadFile($file: Upload!) {
          uploadFile(file: $file)
        }
      `;
      return abortableQuery(queryTemplate, true, false);
    },
  };
};

export const useAverageRating = (
  options?: QueryHookOptions<{ averageRating: number }, AverageRatingArgs>,
) => {
  const query = gql`
    query averageRating($productId: String!) {
      averageRating(productId: $productId)
    }
  `;
  return useLazyQuery<{ averageRating: number }, AverageRatingArgs>(
    query,
    options,
  );
};

export const useCheckExistsReview = (
  options?: QueryHookOptions<
    { checkExistsReview: boolean },
    CheckExistsReviewArgs
  >,
) => {
  const query = gql`
    query checkExistsReview($productId: String!) {
      checkExistsReview(productId: $productId)
    }
  `;
  return useLazyQuery<{ checkExistsReview: boolean }, CheckExistsReviewArgs>(
    query,
    options,
  );
};

export const useConfirmMail = (
  options?: QueryHookOptions<{ confirmMail: boolean }, ConfirmMailArgs>,
) => {
  const query = gql`
    query confirmMail($token: String!) {
      confirmMail(token: $token)
    }
  `;
  return useLazyQuery<{ confirmMail: boolean }, ConfirmMailArgs>(
    query,
    options,
  );
};

export const useCountReview = (
  options?: QueryHookOptions<{ countReview: number }, CountReviewArgs>,
) => {
  const query = gql`
    query countReview($productId: String!) {
      countReview(productId: $productId)
    }
  `;
  return useLazyQuery<{ countReview: number }, CountReviewArgs>(query, options);
};

export const useFakeDataProduct = (
  options?: QueryHookOptions<{ fakeDataProduct: boolean }>,
) => {
  const query = gql`
    query fakeDataProduct {
      fakeDataProduct
    }
  `;
  return useLazyQuery<{ fakeDataProduct: boolean }>(query, options);
};

export const useGetCategoryById = (
  fields: GenFields<Category>,
  options?: QueryHookOptions<
    { getCategoryById: Category },
    GetCategoryByIdArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getCategoryById ($input: CategoryGetOneInput!) {
        getCategoryById(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getCategoryById: Category }, GetCategoryByIdArgs>(
    query,
    options,
  );
};

export const useGetCategoryByParentIdAndLevel = (
  fields: GenFields<Category[]>,
  options?: QueryHookOptions<
    { getCategoryByParentIdAndLevel: Category[] },
    GetCategoryByParentIdAndLevelArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getCategoryByParentIdAndLevel ($input: CategoryGetByParentAndLevel!) {
        getCategoryByParentIdAndLevel(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<
    { getCategoryByParentIdAndLevel: Category[] },
    GetCategoryByParentIdAndLevelArgs
  >(query, options);
};

export const useGetChildIdCategory = (
  options?: QueryHookOptions<
    { getChildIdCategory: string[] },
    GetChildIdCategoryArgs
  >,
) => {
  const query = gql`
    query getChildIdCategory($categoryId: String!) {
      getChildIdCategory(categoryId: $categoryId)
    }
  `;
  return useLazyQuery<{ getChildIdCategory: string[] }, GetChildIdCategoryArgs>(
    query,
    options,
  );
};

export const useGetChildOfCategory = (
  fields: GenFields<Category>,
  options?: QueryHookOptions<
    { getChildOfCategory: Category },
    GetChildOfCategoryArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getChildOfCategory ($categoryId: String!) {
        getChildOfCategory(categoryId: $categoryId) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getChildOfCategory: Category }, GetChildOfCategoryArgs>(
    query,
    options,
  );
};

export const useGetDistrict = (
  fields: GenFields<District[]>,
  options?: QueryHookOptions<{ getDistrict: District[] }, GetDistrictArgs>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getDistrict ($province_code: Float!) {
        getDistrict(province_code: $province_code) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getDistrict: District[] }, GetDistrictArgs>(
    query,
    options,
  );
};

export const useGetListItemCart = (
  fields: GenFields<LineItem[]>,
  options?: QueryHookOptions<{ getListItemCart: LineItem[] }>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getListItemCart  {
        getListItemCart {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getListItemCart: LineItem[] }>(query, options);
};

export const useGetProductBySlug = (
  fields: GenFields<Product>,
  options?: QueryHookOptions<
    { getProductBySlug: Product },
    GetProductBySlugArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getProductBySlug ($slug: String!) {
        getProductBySlug(slug: $slug) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getProductBySlug: Product }, GetProductBySlugArgs>(
    query,
    options,
  );
};

export const useGetProvince = (
  fields: GenFields<Province[]>,
  options?: QueryHookOptions<{ getProvince: Province[] }>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getProvince  {
        getProvince {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getProvince: Province[] }>(query, options);
};

export const useGetWards = (
  fields: GenFields<Wards[]>,
  options?: QueryHookOptions<{ getWards: Wards[] }, GetWardsArgs>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query getWards ($district_code: Float!) {
        getWards(district_code: $district_code) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ getWards: Wards[] }, GetWardsArgs>(query, options);
};

export const useRefreshToken = (
  fields: GenFields<JwtPayload>,
  options?: QueryHookOptions<{ refreshToken: JwtPayload }>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query refreshToken  {
        refreshToken {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ refreshToken: JwtPayload }>(query, options);
};

export const useResetCache = (
  options?: QueryHookOptions<{ resetCache: string }>,
) => {
  const query = gql`
    query resetCache {
      resetCache
    }
  `;
  return useLazyQuery<{ resetCache: string }>(query, options);
};

export const useSearchProduct = (
  fields: GenFields<ResultSearch>,
  options?: QueryHookOptions<
    { searchProduct: ResultSearch },
    SearchProductArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query searchProduct ($search: SearchProductInput!) {
        searchProduct(search: $search) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ searchProduct: ResultSearch }, SearchProductArgs>(
    query,
    options,
  );
};

export const useStatistic = (
  fields: GenFields<User[]>,
  options?: QueryHookOptions<{ statistic: User[] }, StatisticArgs>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query statistic ($input: FilterStatistics!) {
        statistic(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ statistic: User[] }, StatisticArgs>(query, options);
};

export const useStatisticOrder = (
  fields: GenFields<StatisticOrder[]>,
  options?: QueryHookOptions<
    { statisticOrder: StatisticOrder[] },
    StatisticOrderArgs
  >,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const query = gql`
      query statisticOrder ($input: FilterStatistics!) {
        statisticOrder(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useLazyQuery<{ statisticOrder: StatisticOrder[] }, StatisticOrderArgs>(
    query,
    options,
  );
};

export const useTest = (options?: QueryHookOptions<{ test: string }>) => {
  const query = gql`
    query test {
      test
    }
  `;
  return useLazyQuery<{ test: string }>(query, options);
};

export const useAddItemToCart = (
  options?: MutationHookOptions<{ addItemToCart: boolean }, AddItemToCartArgs>,
) => {
  const mutation = gql`
    mutation addItemToCart($input: CartInput!) {
      addItemToCart(input: $input)
    }
  `;
  return useMutation<{ addItemToCart: boolean }, AddItemToCartArgs>(
    mutation,
    options,
  );
};

export const useCreateCategory = (
  options?: MutationHookOptions<
    { createCategory: boolean },
    CreateCategoryArgs
  >,
) => {
  const mutation = gql`
    mutation createCategory($input: CategoryInput!) {
      createCategory(input: $input)
    }
  `;
  return useMutation<{ createCategory: boolean }, CreateCategoryArgs>(
    mutation,
    options,
  );
};

export const useCreateOrder = (
  options?: MutationHookOptions<{ createOrder: boolean }, CreateOrderArgs>,
) => {
  const mutation = gql`
    mutation createOrder($input: CreateOrderInput!) {
      createOrder(input: $input)
    }
  `;
  return useMutation<{ createOrder: boolean }, CreateOrderArgs>(
    mutation,
    options,
  );
};

export const useCreateProduct = (
  options?: MutationHookOptions<{ createProduct: boolean }, CreateProductArgs>,
) => {
  const mutation = gql`
    mutation createProduct($input: CreateProductInput!) {
      createProduct(input: $input)
    }
  `;
  return useMutation<{ createProduct: boolean }, CreateProductArgs>(
    mutation,
    options,
  );
};

export const useCreateReview = (
  options?: MutationHookOptions<{ createReview: boolean }, CreateReviewArgs>,
) => {
  const mutation = gql`
    mutation createReview($input: ReviewInput!) {
      createReview(input: $input)
    }
  `;
  return useMutation<{ createReview: boolean }, CreateReviewArgs>(
    mutation,
    options,
  );
};

export const useDeleteItemCart = (
  options?: MutationHookOptions<
    { deleteItemCart: boolean },
    DeleteItemCartArgs
  >,
) => {
  const mutation = gql`
    mutation deleteItemCart($products: [String!]!) {
      deleteItemCart(products: $products)
    }
  `;
  return useMutation<{ deleteItemCart: boolean }, DeleteItemCartArgs>(
    mutation,
    options,
  );
};

export const useForgotPassword = (
  options?: MutationHookOptions<
    { forgotPassword: boolean },
    ForgotPasswordArgs
  >,
) => {
  const mutation = gql`
    mutation forgotPassword($email: String!) {
      forgotPassword(email: $email)
    }
  `;
  return useMutation<{ forgotPassword: boolean }, ForgotPasswordArgs>(
    mutation,
    options,
  );
};

export const useLogin = (
  fields: GenFields<JwtPayload>,
  options?: MutationHookOptions<{ login: JwtPayload }, LoginArgs>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const mutation = gql`
      mutation login ($input: LoginInput!) {
        login(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useMutation<{ login: JwtPayload }, LoginArgs>(mutation, options);
};

export const useRegister = (
  options?: MutationHookOptions<{ register: boolean }, RegisterArgs>,
) => {
  const mutation = gql`
    mutation register($input: RegisterInput!) {
      register(input: $input)
    }
  `;
  return useMutation<{ register: boolean }, RegisterArgs>(mutation, options);
};

export const useResetPassword = (
  options?: MutationHookOptions<{ resetPassword: boolean }, ResetPasswordArgs>,
) => {
  const mutation = gql`
    mutation resetPassword($input: ResetPasswordInput!) {
      resetPassword(input: $input)
    }
  `;
  return useMutation<{ resetPassword: boolean }, ResetPasswordArgs>(
    mutation,
    options,
  );
};

export const useUpdateItemCart = (
  options?: MutationHookOptions<
    { updateItemCart: boolean },
    UpdateItemCartArgs
  >,
) => {
  const mutation = gql`
    mutation updateItemCart($input: CartInput!) {
      updateItemCart(input: $input)
    }
  `;
  return useMutation<{ updateItemCart: boolean }, UpdateItemCartArgs>(
    mutation,
    options,
  );
};

export const useUpdateProduct = (
  options?: MutationHookOptions<{ updateProduct: boolean }, UpdateProductArgs>,
) => {
  const mutation = gql`
    mutation updateProduct($input: UpdateProduct!, $productId: String!) {
      updateProduct(input: $input, productId: $productId)
    }
  `;
  return useMutation<{ updateProduct: boolean }, UpdateProductArgs>(
    mutation,
    options,
  );
};

export const useUpdateReview = (
  options?: MutationHookOptions<{ updateReview: boolean }, UpdateReviewArgs>,
) => {
  const mutation = gql`
    mutation updateReview($input: ReviewInput!) {
      updateReview(input: $input)
    }
  `;
  return useMutation<{ updateReview: boolean }, UpdateReviewArgs>(
    mutation,
    options,
  );
};

export const useUpdateUser = (
  fields: GenFields<User>,
  options?: MutationHookOptions<{ updateUser: User }, UpdateUserArgs>,
) => {
  const fragment = queryBuilder(fields);
  const { isString, isFragment, fragmentName } = guessFragmentType(fragment);
  const mutation = gql`
      mutation updateUser ($input: UpdateUserInput!) {
        updateUser(input: $input) {
          ${isString ? fragment : "..." + fragmentName}
        }
      } ${isFragment ? fragment : ""}
      `;

  return useMutation<{ updateUser: User }, UpdateUserArgs>(mutation, options);
};

export const useUploadFile = (
  options?: MutationHookOptions<{ uploadFile: string }, UploadFileArgs>,
) => {
  const mutation = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file)
    }
  `;
  return useMutation<{ uploadFile: string }, UploadFileArgs>(mutation, options);
};
