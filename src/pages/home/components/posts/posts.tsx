import {Card} from 'components';
import {TPost} from 'services/types';

import styles from './posts.module.scss';

type TPostsProps = {
  posts?: TPost[];
};

export const Posts = ({posts}: TPostsProps) => (
  <div className={styles.root}>
    {posts?.map((post) => (
      <div key={post.id} className={styles.col}>
        <Card {...post} />
      </div>
    ))}
  </div>
);
