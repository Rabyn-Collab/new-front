import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/apis';



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
  endpoints: (builder) => ({

    getTopProducts: builder.query({
      query: (query) => ({
        url: '/topProducts',
        method: 'GET'
      })
    }),

    getAllProducts: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET'
      })
    }),




  })
});


export const { useGetAllProductsQuery, useGetTopProductsQuery } = productApi;