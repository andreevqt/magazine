import React from 'react';
import clsx from 'clsx';
import {noop} from 'lodash';

import {Loader} from 'icons';

import styles from './button.module.scss';

type THtmlTypes = 'button' | 'submit' | 'reset';

type TSize = 'default' | 'fixed';

type TButtonProps = {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: string;
  children: React.ReactNode;
  htmlType?: THtmlTypes;
  size?: TSize;
  isLoading?: boolean;
  outline?: boolean;
};

export const Button = ({
  className,
  children,
  size = 'default',
  htmlType = 'button',
  onClick = noop,
  outline = false,
  isLoading = false,
}: TButtonProps) => {
  const classes = clsx(styles.button, styles[size], outline && styles.outline, isLoading && styles.loading, className);
  return (
    <button type={htmlType} className={classes} onClick={onClick} disabled={isLoading}>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {children}
    </button>
  );
};
