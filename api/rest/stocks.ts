import { AxiosResponse } from "axios";
import { request } from "../request";
import { IStocksRequest } from "../types";

export const fetchStocks = async (
  q: string = "tesla",
  region: string = "US",
): Promise<AxiosResponse<IStocksRequest>> => {
  return request({
    url: "/auto-complete",
    params: { q, region },
  });
};
