import { fetchStocks } from "../../api/rest/stocks";
import { IStocksRequest } from "../../api/types";

export const getStocks = async (): Promise<IStocksRequest | null> => {
  try {
    const { data } = await fetchStocks();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
