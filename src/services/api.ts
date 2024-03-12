import {isEmpty} from 'lodash';
import Http from 'http-status';

import {PAGINATION_LIMIT} from '../constants';

import {API_BASE} from './constants';
import {TPost} from './types';

export class NotFound extends Error {}

export class ServerError extends Error {}

export type TFetchResult<T> = {
  data: T;
  headers: Headers;
};

const cache: Record<string, any> = {};

const fetchBase = <T>(route: string, params?: Record<string, string>): Promise<TFetchResult<T>> => {
  const url = `${API_BASE}${route}${!isEmpty(params) ? `?${new URLSearchParams(params)}` : ''}`;
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }

  return fetch(url).then((res) => {
    if (res.status === Http.NOT_FOUND) {
      throw new NotFound();
    } else if (res.status === Http.INTERNAL_SERVER_ERROR) {
      throw new ServerError();
    } else {
      return res.json().then((data) => {
        cache[url] = {data, headers: res.headers};
        return cache[url];
      });
    }
  });
};

export const getPosts = (params: {_start?: string; _limit: string} = {_start: '0', _limit: String(PAGINATION_LIMIT)}) =>
  fetchBase<TPost[]>('/posts', params);
export const getPost = (id: string) => fetchBase<TPost>(`/posts/${id}`);
