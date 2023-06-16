import { PaginateQuery } from "@types";

// for infinite query pages  to flatList data
type KeyParams = {
    [key: string]: any;
  };
  export const DEFAULT_LIMIT = 10;
  
  export function getQueryKey<T extends KeyParams>(key: string, params?: T) {
    return [key, ...(params ? [params] : [])];
export function normalizePages<T>(pages?: PaginateQuery<T>[]): T[] {
    return pages
      ? pages.reduce((prev: T[], current) => [...prev, ...current.results], [])
      : [];
  }
  
  // a function that accept a url and return params as an object
  export function getUrlParameters(
    url: string | null
  ): { [k: string]: string } | null {
    if (url === null) {
      return null;
    }
    let regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while ((match = regex.exec(url))) {
      if (match[1] !== null) {
        //@ts-ignore
        params[match[1]] = match[2];
      }
    }
    return params;
  }
  
  export const getPreviousPageParam: GetNextPageParamFunction<
    PaginateQuery<unknown>
  > = (page) => getUrlParameters(page.previous)?.offset ?? null;
  
  export const getNextPageParam: GetPreviousPageParamFunction<
    PaginateQuery<unknown>
  > = (page) => getUrlParameters(page.next)?.offset ?? null;