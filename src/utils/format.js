export const numberTextFormat = (text) => {
  const stringText = String(text).replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ","
  );
  return stringText;
};
