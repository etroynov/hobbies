import type { FC } from 'react';
import { Block, Typography } from '@/components';

import styles from './styles.module.scss';

export const UseContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.container__header}>
        <Typography variant="92_96">How can I use <br /> Chobby</Typography>
      </header>

      <div>
        <img src="/assets/img/cards_1.png" width="100%" alt="" />
      </div>
    </div>
  </Block>
);
