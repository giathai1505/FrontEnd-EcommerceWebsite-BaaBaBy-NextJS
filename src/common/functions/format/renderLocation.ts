/**
 *  @description Give me ward, district and province, I'll give you magic
 *  @example
 *    - ward: "Linh Trung"
 *    - district: undefine
 *    - province: "Ho Chi Minh"
 *  --> "Linh Trung, Ho Chi, Minh"
 */

export const renderLocation = (array: (string | undefined)[]): string => {
  let splitLocation = array.filter((item) => !!item);
  return splitLocation.join(", ");
};
