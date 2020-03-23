import { Apikey } from "../config";

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ResponseStatusError extends MyError {
  constructor(message) {
    super(message);
    this.message = message;
    this.type = "NETWORK_ERROR";
  }
}

export const fetchData = async opts => {
  const headers = new Headers({
    authorization: `Apikey ${Apikey}`
  });
  const options = { headers };
  const response = await fetch(getUrl(opts), options);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ResponseStatusError(response.message);
  }
};

export const getUrl = (
  options = {
    getNames: false,
    getMultiPrice: false,
    getCryptoPrice: false,
    values: []
  }
) => {
  if (options.getNames)
    return `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=${options.values[0]}&tsym=USD`;
  if (options.getMultiPrice) {
    const [cryptoOne, cryptoTwo] = options.values;
    return `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoOne}&tsyms=${cryptoTwo}`;
  }
  if (options.getCryptoPrice)
    return decodeURI(`wss://streamer.cryptocompare.com/v2?api_key=${Apikey}`);
};
