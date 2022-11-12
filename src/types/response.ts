export interface ResponseError {
  data: any;
  status: number;
}

export interface PaginateResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
}
