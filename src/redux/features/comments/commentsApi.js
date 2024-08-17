import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../../constants/constants';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${API_PATH}/api/comments`,
    credentials: 'include',
  }),
  tagTypes: ['Comments'], // Define the tag types
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: '/post-comment',
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [{ type: 'Comments', id: postId }],
    }),
    getComments: builder.query({
      query: () => ({
        url: '/total-comments',
      })
    })
  }),
});

export const { usePostCommentMutation, useGetCommentsQuery } = commentApi;

export default commentApi;
