import type { FC } from 'react';
import { Block } from '@/components';

import styles from './styles.module.scss';

export const CardsContainer: FC = () => (
  <Block className={styles.container}>
    <img src="/assets/img/cards_2.png" width="100%" />
  </Block>
);
