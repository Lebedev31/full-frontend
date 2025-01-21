import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './apiSlice/userSlice';
import { authApi } from './apiSlice/authSlice';
import gameReduser from './slice/gameSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        game: gameReduser
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

