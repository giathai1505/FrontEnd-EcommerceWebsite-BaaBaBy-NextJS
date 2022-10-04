export const numberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @example
 *  price = 1500000
 *    --> "đ 1,500,000";
 */
export const renderPrice = (price: number): string => {
  if (!price) return "đ 0";
  const formattedPrice = numberWithCommas(price);
  const result = `đ ${formattedPrice}`;
  return result;
};
