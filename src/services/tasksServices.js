import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/db";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["tasks"],
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
      providesTags: ["tasks"],
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
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ task, id }) => ({
        url: `tasks/${id}.json`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useGetTaskByIdQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
