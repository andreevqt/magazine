import {useEffect, useState} from 'react';

import {TPost} from 'services/types';
import {getPost} from 'services/api';

type TUsePostProps = {
  id?: string;
  onError?: () => void;
};

export const usePost = ({id, onError}: TUsePostProps) => {
  const [post, setPost] = useState<TPost | undefined>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPost(id)
        .then(({data}) => setPost(data))
        .catch(() => onError?.())
        .finally(() => setLoading(false));
    }
  }, [id, onError]);

  return {
    isLoading,
    post,
  };
};
