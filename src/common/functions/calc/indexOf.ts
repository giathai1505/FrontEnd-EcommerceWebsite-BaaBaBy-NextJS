export const indexOf = <T>(arr: T[] = [], callback: (item: T) => boolean) => {
  if (!arr) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};
