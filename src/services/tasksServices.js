import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/db";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks.json`,
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: `tasks.json`,
        method: "POST",
        body: task,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTasksQuery, useCreateTaskMutation } = tasksApi;
