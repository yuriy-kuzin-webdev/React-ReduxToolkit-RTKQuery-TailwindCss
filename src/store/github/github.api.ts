import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { IRepo, IUser, ServerResponse } from "../../types/types";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (userLogin: string) => ({
        url: `users/${userLogin}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
