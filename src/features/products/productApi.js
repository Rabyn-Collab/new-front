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
      }),
      providesTags: ['Product']
    }),

    getAllProducts: builder.query({
      query: (query) => ({
        url: '/',
        params: {
          search: query
        },
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/${query.id}`,
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH'
      }),
      invalidatesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    addReview: builder.mutation({
      query: (query) => ({
        url: `/review/${query.id}`,
        body: query.body,
        method: 'PATCH',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),



  })
});


export const { useGetAllProductsQuery, useGetTopProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useAddReviewMutation } = productApi;