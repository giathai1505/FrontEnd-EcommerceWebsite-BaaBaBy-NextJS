export const isOneOf = <T>(target: T, arr: T[]) => {
  for (let item of arr) {
    if (item === target) return true;
  }
  return false;
};
