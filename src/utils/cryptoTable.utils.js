export const getSubs = cryptoNames =>
  cryptoNames.map(name => `5~CCCAGG~${name}~USD`);

export const priceFormat = price => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(price);
};
