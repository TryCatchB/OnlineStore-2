import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const electronicsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    fetchElectronics: builder.query({
      query: () => "/products/category/electronics",
    }),
  }),
});

export const { useFetchElectronicsQuery } = electronicsSlice;
