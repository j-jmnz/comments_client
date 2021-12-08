import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { commentsApi } from './api';

export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
});

setupListeners(store.dispatch);
