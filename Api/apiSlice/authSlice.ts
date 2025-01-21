import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ResponseSuccessRegister } from '@/types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://host.docker.internal:8080/auth', credentials: 'include'} ), // базовый URL для запросов
  endpoints: (builder) => ({
    login: builder.mutation<ResponseSuccessRegister,  Omit<IUser, 'email'>>({
        query: (newUser) => ({
          url: '/login',
          method: 'POST',
          body: newUser,
        }), 
      }),
  }),
});

export const { useLoginMutation } = authApi; 
