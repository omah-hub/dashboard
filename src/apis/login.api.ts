import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserModel } from "../models/user.model";
import { LoginValues } from "../models/login.model";
// import { storeToken } from "../config/token";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://wacs.ippis.gov.ng/api/v1/mda" }),
 
  endpoints: (builder) => ({
    login: builder.mutation({
     query: (body: {username: string; password: string}) => {
      return {
        url: "/login",
        method: "post",
        body,
      }
     }
     
    }),
  }),
});

export const { useLoginMutation } = loginApi;
