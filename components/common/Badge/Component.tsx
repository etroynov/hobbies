import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  icon?: 'discord' | 'tw' | 'instagram' | 'medium';
  block?: boolean;
};

const icons = {
  discord: <i className={cx(styles.ico, styles.ico__discord)}></i>,
  tw: <i className={cx(styles.ico, styles.ico__twitter)}></i>,
  instagram: <i className={cx(styles.ico, styles.ico__instagram)}></i>,
  medium: <i className={cx(styles.ico, styles.ico__medium)}></i>,
}

export const Badge: FC<Props> = ({ icon, variant = 1, block, children }) => (
  <div className={cx(styles.badge, styles[`badge__${variant}`], {
    [styles.block]: block
  })}>
    {icon ? icons[icon] : null}
    {children}
  </div>
);
