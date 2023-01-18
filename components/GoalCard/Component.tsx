import type { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  header?: ReactNode
  children: ReactNode
}

export const GoalCard: FC<Props> = ({ header, children }) => (
  <div className={styles.component}>
    {header ? (
      <header className={styles.component__header}>
        {header}
      </header>
    ) : null}

    <div className={styles.component__body}>
      {children}
    </div>
  </div>
);
