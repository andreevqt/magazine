import {BaseLayout} from 'layouts/base-layout';
import {Pagination} from 'components';
import {usePosts} from 'hooks';

import {PAGINATION_LIMIT} from '../../constants';

import {Posts} from './components/posts';
import styles from './home.module.scss';

export const Home = () => {
  const {currentPage, totalPages, posts, loadPosts, isLoading} = usePosts();

  return (
    <BaseLayout isLoading={isLoading}>
      <Posts posts={posts} />
      <div className={styles.bottomContainer}>
        {posts.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            onClick={(page) => loadPosts(Number(page), PAGINATION_LIMIT)}
            limit={8}
            totalPages={totalPages}
          />
        ) : undefined}
      </div>
    </BaseLayout>
  );
};
