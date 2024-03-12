import {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {clsx} from 'clsx';
import {isNumber} from 'lodash';
import {nanoid} from 'nanoid';

import {makePagination} from './helpers';
import styles from './pagination.module.scss';

type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  limit: number;
  onClick?: (item: string | number) => void;
};

export const Pagination = ({currentPage, totalPages, limit, onClick}: TPaginationProps) => {
  const items = useMemo(() => makePagination(currentPage, totalPages, limit), [currentPage, totalPages, limit]);

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div className={styles.item} key={nanoid()}>
          {item !== `...` && isNumber(item) ? (
            <Link
              className={clsx(styles.link, item === currentPage && styles.active)}
              onClick={(e) => {
                e.preventDefault();
                onClick?.(item);
              }}
              to="/"
            >
              {item}
            </Link>
          ) : (
            item
          )}
        </div>
      ))}
    </div>
  );
};
