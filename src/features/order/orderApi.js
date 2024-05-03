import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/apis';



export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`
  }),
  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['Order']
    }),

    orderByUser: builder.query({
      query: (query) => ({
        url: '/user',
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['Order']
    }),

    orderById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['Order']
    }),

    addOrder: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Order']
    }),






  })
});


export const { useGetAllOrdersQuery, useAddOrderMutation, useOrderByIdQuery, useOrderByUserQuery } = orderApi;