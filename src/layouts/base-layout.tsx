import {ReactNode} from 'react';
import {clsx} from 'clsx';

import {Header, Container} from 'components';

import styles from './base-layout.module.scss';

type BaseLayoutProps = {
  children: ReactNode;
  isLoading?: boolean;
};

export const BaseLayout = ({children, isLoading}: BaseLayoutProps) => (
  <div className={clsx(styles.root, isLoading && styles.loading)}>
    <Header />
    <main className={styles.content}>
      <Container>{children}</Container>
    </main>
  </div>
);
