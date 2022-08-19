import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPoloniexModelItem, PoloniexResponse } from "../models/poloniex.model";


export const poloniexApi = createApi({
  reducerPath: "poloniex.api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://poloniex.com/",
  }),
  endpoints: build => ({
    getTicker: build.query<PoloniexResponse, unknown>({
      query: () => ({
        url: "public?command=returnTicker",
      }),
      transformResponse: (response: IPoloniexModelItem) => {
        let arr = [];
        for (let key in response) {
          //@ts-ignore
          response[key].name = key;
          //@ts-ignore
          arr.push(response[key]);
        }
        return arr;
      },
    }),
  }),
});

export const { useGetTickerQuery } = poloniexApi;
