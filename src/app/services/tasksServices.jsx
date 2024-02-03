import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../firebase/db";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks.json`,
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
