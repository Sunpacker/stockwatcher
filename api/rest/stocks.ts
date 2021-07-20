import { AxiosResponse } from "axios";
import { request } from "../request";

export interface INews {
  uuid: string;
  link: string;
  providerPublishTime: number;
  publisher: string;
  title: string;
  type: string;
}
export interface IQuote {
  symbol: string; // ticker
  longname: string;
  shortname: string;
  exchange: string;
  index: string;
  isYahooFinance: boolean;
  quoteType: string;
  score: number;
  typeDisp: string;
}

export interface IStocksRequest {
  count: number;
  explains: any[];
  lists: any[];
  nav: any[];
  news: INews[];
  quotes: IQuote[];
  researchReports: any[];
  timeTakenForAlgowatchlist: number;
  timeTakenForCrunchbase: number;
  timeTakenForNav: number;
  timeTakenForNews: number;
  timeTakenForPredefinedScreener: number;
  timeTakenForQuotes: number;
  timeTakenForResearchReports: number;
  totalTime: number;
}

export const fetchStocks = async (
  q: string = "tesla",
  region: string = "US",
): Promise<AxiosResponse<IStocksRequest>> => {
  return request({
    url: "/auto-complete",
    params: { q, region },
  });
};
