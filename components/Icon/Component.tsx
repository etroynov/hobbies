import cx from 'classnames';
import type { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: 'arrowUp' | 'arrowDown';
}

export const Icon: FC<Props> = ({ name }) => (
  <i className={cx(styles.ico, styles[name])}></i>
);