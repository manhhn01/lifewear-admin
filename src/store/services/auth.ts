import { LoginQueryParams, LoginQueryResponse } from '../../types/login';
import { baseRtk } from './';

const authApi = baseRtk.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginQueryResponse, LoginQueryParams>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: {
          device: navigator.userAgent,
          ...credentials,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
