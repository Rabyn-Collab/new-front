import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/apis';



export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/users`}),
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/login',
        body: query,
        method: 'POST'
      })
    }),

    userRegister: builder.mutation({
      query: (query) => ({
        url: '/register',
        body: query,
        method: 'POST'
      })
    })





  })
});


export const { useUserLoginMutation, useUserRegisterMutation } = authApi;