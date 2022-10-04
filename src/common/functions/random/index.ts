export const randomInteger = (min: number, max: number): number => {
  const randFloat = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(randFloat);
};

export const randomId = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + "-" + s4();
};
