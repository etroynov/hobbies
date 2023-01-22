import cx from 'classnames';
import type { FC, ReactNode } from 'react';
import { Block, Typography } from '@/components';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode
}

export const PerksContainer: FC<Props> = ({ children }) => (
  <Block className={cx(styles.component, 'container')}>

  </Block>
);
