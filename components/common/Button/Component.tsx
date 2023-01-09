import cx from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.css';

type Props = {
    children: ReactNode;
}


export const Button: FC<Props> = ({ children }) => (
    <div>
    <button className={cx(styles.btn, styles.btn__primary)}>{children}</button>
    <button className={cx(styles.btn, styles.btn__secondary)}>{children}</button>
    <button className={cx(styles.btn, styles.btn__disabled)}>{children}</button>
    <button className={cx(styles.btn, styles.btn__primary, styles.btn__primary_xl)}>{children}</button>
    <button className={cx(styles.btn__var, styles.btn__var__primary)}>{children}</button>
    <button className={cx(styles.btn__var, styles.btn__var__secondary)}>{children}</button>
    </div>
);
