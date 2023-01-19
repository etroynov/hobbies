import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  variant?: 1 | 2;
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
  // <div>
    /* <div className={cx(styles.badge__social)}>
      Discord
    </div>
    <div className={cx(styles.badge__social)}>
      Twitter
    </div>
    <div className={cx(styles.badge__social)}>
      Instagram
    </div>
    <div className={cx(styles.badge__social)}>
      Medium
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__1)}>
      <div className={cx(styles.col__1)}>750K</div>
      <div className={cx(styles.col__2)}>
        registered <br /> users
      </div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__2)}>
      <div className={cx(styles.col__1)}>1B+</div>
      <div className={cx(styles.col__2)}>
        in <br /> transaction
      </div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__3)}>
      <div className={cx(styles.col__1)}>2017</div>
      <div className={cx(styles.col__2)}>Funded</div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__4)}>
      <div className={cx(styles.col__1)}>2200%</div>
      <div className={cx(styles.col__2)}>
        since seed our <br /> private rounds
      </div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__5)}>
      <div className={cx(styles.col__1)}>50M</div>
      <div className={cx(styles.col__2)}>
        trading <br /> volume
      </div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__6)}>
      <div className={cx(styles.col__1)}>25M</div>
      <div className={cx(styles.col__2)}>
        market <br /> cap
      </div>
    </div>
    <div className={cx(styles.badge__advantages, styles.badge__advantages__7)}>
      <div className={cx(styles.row)}>
        <div className={cx(styles.col__1)}>JUNE 22</div>
        <div className={cx(styles.col__2)}>launched</div>
      </div>
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__primary,
        styles.badge__stages__primary__1
      )}
    >
      Discount 85%
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__primary,
        styles.badge__stages__primary__2
      )}
    >
      Discount 85%
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__primary,
        styles.badge__stages__primary__3
      )}
    >
      Discount 85%
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__secondary,
        styles.badge__stages__secondary__1
      )}
    >
      Discount 70%
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__secondary,
        styles.badge__stages__secondary__2
      )}
    >
      $ 300
    </div>
    <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__secondary,
        styles.badge__stages__secondary__3
      )}
    >
      NOW
    </div> */
    /* <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__primary,
        styles.badge__stages__primary__4
      )}
    >
      {children}
    </div> */
    /* <div
      className={cx(
        styles.badge__stages,
        styles.badge__stages__primary,
        styles.badge__stages__primary__5
      )}
    >
      85% discount
    </div> */
  /* </div> */
);
