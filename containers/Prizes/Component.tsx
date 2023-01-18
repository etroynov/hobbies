import type { FC } from 'react';
import { Block } from '@/components';

import styles from './styles.module.scss';

export const PrizesContainer: FC = () => (
  <Block className={styles.container}>
    <img src="/assets/img/main_logo.svg" alt="" />
  </Block>
);
