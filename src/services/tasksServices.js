import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/db";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks.json`,
      transformResponse: (response) => {
        const data = Object.entries(response).map((item) => ({
          id: item[0],
          ...item[1],
        }));
        return data;
      },
    }),
    getTaskById: builder.query({
      query: (id) => `tasks/${id}.json`,
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
export const { useGetTasksQuery, useCreateTaskMutation, useGetTaskByIdQuery } =
  tasksApi;
