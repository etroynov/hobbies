import cx from "classnames";
import type { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: "s" | "sm" | "sm2" | "m" | "md" | "xxl";
  className?: string;
};

export const Card: FC<Props> = ({
  header, children, footer, size = "s", className
}) => (
  <section className={cx(styles.card, styles[size], className)}>
    {header ? <header className={styles.card__header}>{header}</header> : null}
    <section className={styles.card__body}>{children}</section>
    {footer ? <footer className={styles.card__footer}>{footer}</footer> : null}
  </section>
);
