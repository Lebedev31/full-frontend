import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ResponseSuccessRegister } from '@/types/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://host.docker.internal:8080/user', credentials: 'include'}), // базовый URL для запросов
  endpoints: (builder) => ({
    createUser: builder.mutation<ResponseSuccessRegister, IUser>({
        query: (newUser) => ({
          url: '/create',
          method: 'POST',
          body: newUser,
        }), 
      }),
  }),
});

export const { useCreateUserMutation } = userApi; 
