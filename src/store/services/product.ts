import { Product } from "../../types/product";
import { PaginationParams } from "../../types/request";
import { PaginateResponse } from "../../types/response";
import { baseRtk } from "./";

const productApi = baseRtk.injectEndpoints({
  endpoints: (build) => ({
    getProductList: build.query<
      PaginateResponse<Product>,
      PaginationParams | void
    >({
      query: (params) => ({
        url: "/products",
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetProductListQuery } = productApi;
