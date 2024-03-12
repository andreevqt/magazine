import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {TPost} from 'services/types';

import styles from './card.module.scss';

type TCardProps = TPost;

export const Card = ({id, body, title}: TCardProps) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => navigate(`/posts/${id}`), [id, navigate]);

  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};
