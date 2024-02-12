import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, auth_base_url, base_url } from "../firebase/db";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: auth_base_url }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    Signup: builder.mutation({
      query: (user) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: "POST",
        body: user,
      }),
    }),
    Login: builder.mutation({
      query: (user) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: "POST",
        body: user,
      }),
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: base_url + `profileImage/${localId}.json`,
        method: "PUT",
        body: { image },
      }),
      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => base_url + `profileImage/${localId}.json`,
      providesTags: ["image"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  usePostProfileImageMutation,
  useGetProfileImageQuery,
} = authApi;
