import type { FC } from 'react';
import { Block, Typography } from '@/components';

import styles from './styles.module.scss';

export const UseContainer: FC = () => (
  <Block>
    <div className="container">
      <header>
        <Typography variant={9}>How can I use <br /> Chobby</Typography>
      </header>
    </div>
  </Block>
  
);
