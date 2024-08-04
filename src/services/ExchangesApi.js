import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exchangesApiHeaders = {
    'x-rapidapi-key': '17b628ed1amsh9e47b1bf860beffp140fdbjsneeb496a46329',
    'x-rapidapi-host': 'crypto-market-prices.p.rapidapi.com'
}

const baseUrl =  'https://crypto-market-prices.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: exchangesApiHeaders});

export const exchangesApi = createApi({
    reducerPath: 'exchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getExchanges: build.query({
            query: () => createRequest(`/exchanges`),
            
        }),
      
    }),
});

export const { useGetExchangesQuery } = exchangesApi;