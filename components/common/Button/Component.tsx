import cx from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.css';

type Props = {
    children: ReactNode;
}

export const Button: FC<Props> = ({ children }) => (
    <button className={cx(styles.btn)}>{children}</button>
);
