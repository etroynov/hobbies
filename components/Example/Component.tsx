import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode
}

export const Example: FC<Props> = ({ children }) => (
  <div className={styles.component}>
    {children}
  </div>
);
