import {useNavigate, useParams} from 'react-router-dom';
import {useCallback} from 'react';

import {usePost} from 'hooks/use-post';
import {BaseLayout} from 'layouts/base-layout';
import {Back as BackIcon} from 'icons';

import styles from './post.module.scss';

export const Post = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {post, isLoading} = usePost({
    id,
    onError: () => navigate('/404'),
  });
  const onClick = useCallback(() => navigate('/'), [navigate]);

  return (
    <BaseLayout isLoading={isLoading}>
      {post && !isLoading ? (
        <div className={styles.root}>
          <div className={styles.goBack} onClick={onClick}>
            <BackIcon />
          </div>
          <h2 className={styles.title}>{post?.title}</h2>
          <p className={styles.content}>{post?.body}</p>
        </div>
      ) : undefined}
    </BaseLayout>
  );
};
