import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/v1/' }),
    endpoints: builder => ({
        getAllComments: builder.query({
            query: () => 'comments',
        }),
        postComment: builder.mutation({
            query: ({ ...post }) => ({
                url: `comments`,
                method: 'POST',
                body: post,
            }),
        }),
    }),
});
