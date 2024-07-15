import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DashboardCounter } from "../models/counter.model";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user.token; // Assuming your token is stored in localStorage
};

export const dashboardApi = createApi({
  reducerPath: "dashboard",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wacs.ippis.gov.ng/api/v1/mda",
    prepareHeaders: (headers) => {
      const token = getToken(); // Get token from localStorage or other source
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["dashboard"],
  endpoints: (builder) => ({
    fetchCounter: builder.query<DashboardCounter, void>({
      query: () => "/dashboard-data",
      transformResponse: (response: DashboardCounter) => {
        console.log("Raw response:", response);
        return response;
      },
    }),
  }),
});

export const { useFetchCounterQuery } = dashboardApi;
