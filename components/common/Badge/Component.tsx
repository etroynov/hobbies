import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

export const Badge: FC<Props> = ({ children }) => (
  <>
    <div className={cx(styles.badge, styles.badge__default)}>
      {children}
    </div>
    <div className={cx(styles.badge, styles.badge__primary)}>
      {children}
    </div>
    <div className={cx(styles.badge, styles.badge__secondary)}>
      {children}
    </div>
    <div className={cx(styles.badge, styles.badge__secondary_2)}>
      {children}
    </div>
    <div className={cx(styles.badge, styles.badge__secondary_3)}>
      {children}
    </div>
    <div className={cx(styles.badge, styles.badge__secondary_3)}>
      {children}
    </div>
  </>
);
