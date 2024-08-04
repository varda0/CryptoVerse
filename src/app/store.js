import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoapi";

import { exchangesApi } from "../services/ExchangesApi";



export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [exchangesApi.reducerPath]: exchangesApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware, exchangesApi.middleware),
});