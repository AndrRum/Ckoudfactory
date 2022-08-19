import { configureStore } from "@reduxjs/toolkit";
import { poloniexApi } from "../redux/poloniex.api";

export const store = configureStore({
  reducer: {
    [poloniexApi.reducerPath]: poloniexApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(poloniexApi.middleware)
});
