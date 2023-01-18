import cx from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
}

export const Block: FC<Props> = ({ children, className }) => (
  <div className={cx(styles.component, className)}>
    {children}
  </div>
);
