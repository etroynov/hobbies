import cx from "classnames";
import type { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: "s" | "m";
};

export const Card: FC<Props> = ({ header, children, footer, size = "s" }) => (
  <section className={cx(styles.card, styles[size])}>
    {header ? <header className={styles.card__header}>{header}</header> : null}
    <section className={styles.card__body}>{children}</section>
    {footer ? <footer className={styles.card__footer}>{footer}</footer> : null}
  </section>
);
