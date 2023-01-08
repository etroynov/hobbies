import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

export const Badge: FC<Props> = ({ children }) => (
  <div>
    <div className={cx( styles.badge__social)}>
      <i className={styles.ico__discord}></i>
      Discord
    </div>
    <div className={cx( styles.badge__social)}>
    <i className={styles.ico__twitter}></i>
      Twitter
    </div>
    <div className={cx( styles.badge__social)}>
    <i className={styles.ico__instagram}></i>
      Instagram
    </div>
    <div className={cx( styles.badge__social)}>
    <i className={styles.ico__medium}></i>
      Medium
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__1)}>
      <div className={cx (styles.col__1)}>750K</div>
      <div className={cx (styles.col__2)}>registered <br /> users</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__2)}>
      <div className={cx (styles.col__1)}>1B+</div>
      <div className={cx (styles.col__2)}>in <br /> transaction</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__3)}>
      <div className={cx (styles.col__1)}>2017</div>
      <div className={cx (styles.col__2)}>Funded</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__4)}>
      <div className={cx (styles.col__1)}>2200%</div>
      <div className={cx (styles.col__2)}>since seed our <br /> private rounds</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__5)}>
      <div className={cx (styles.col__1)}>50M</div>
      <div className={cx (styles.col__2)}>trading <br /> volume</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__6)}>
      <div className={cx (styles.col__1)}>25M</div>
      <div className={cx (styles.col__2)}>market <br /> cap</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__7)}>
      <div className={cx(styles.row)}>
      <div className={cx (styles.col__1)}>JUNE 22</div>
      <div className={cx (styles.col__2)}>launched</div>
      </div>
    </div>
  </div>
);
