import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories';
import productsReducer from './products';
import bucketReducer from './bucket';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        bucket: bucketReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});