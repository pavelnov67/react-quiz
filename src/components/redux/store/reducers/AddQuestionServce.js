import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_URL } from '../../../variables/vars'

export const addQuestionAPI = createApi({
  reducerPath: 'addQuestionAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: base_URL,
  }),
  endpoints: (build) => ({
    createQuestion: build.mutation({
      query: (title, answer) => ({
        url: '/game/blitz.questions_add',
        method: 'POST',
        body: {
          title,
          answer,
        },
      }),
      invalidatesTags: ['addQuestionAPI'],
    }),
    /*updatePost: build.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),*/
  }),
})
