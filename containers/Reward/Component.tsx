import type { FC } from 'react';
import { Block, Typography } from '@/components';

import styles from './styles.module.scss';

export const RewardContainer: FC = () => (
  <Block>
    <div className="container">
      <header>
        <div className={styles.container__logo}></div>
      </header>
    </div>
  </Block>
  
);
