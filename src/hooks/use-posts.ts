import {useCallback, useEffect, useMemo, useState} from 'react';
import {throttle} from 'lodash';

import {TPost} from 'services/types';
import {TFetchResult, getPosts} from 'services/api';

export const usePosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const checkHasMore = useCallback(
    (params: TFetchResult<TPost[]>) => {
      const {data, headers} = params;
      const totalCount = Number(headers.get('x-total-count'));
      setTotalPages(totalCount);
      setHasMore(posts.length + data.length < totalCount);
      return params;
    },
    [posts.length],
  );

  const loadPosts = useMemo(
    () =>
      throttle((page: number, limit: number) => {
        setLoading(true);
        getPosts({_start: String(page - 1), _limit: String(limit)})
          .then(checkHasMore)
          .then(({data}) => {
            setPosts(data);
            setCurrentPage(page);
          })
          .finally(() => setLoading(false));
      }, 300),
    [setPosts, setCurrentPage, setLoading, checkHasMore],
  );

  useEffect(() => {
    getPosts()
      .then(checkHasMore)
      .then(({data}) => setPosts(data))
      .finally(() => setLoading(false));
  }, [checkHasMore]);

  return {
    isLoading,
    posts,
    loadPosts,
    hasMore,
    currentPage,
    totalPages,
  };
};
