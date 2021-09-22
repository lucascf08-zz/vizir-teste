import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cepApi = createApi({
  reducerPath: "cepApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://viacep.com.br/ws/",
  }),
  endpoints: (build) => ({
    getEndereco: build.mutation({
      query: (cep: string) => ({
        url: `/${cep}/json`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useGetEnderecoMutation } = cepApi;
