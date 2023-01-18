import cx from "classnames";
import { type FC, type ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  tag?: "div" | "p" | "span" | "h1" | "h2" | "h3";
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  bold?: boolean;
  upper?: boolean;
  children: ReactNode;
  className?: string;
};

export const Typography: FC<Props> = ({
  tag = "div",
  variant = 1,
  bold,
  children,
  className,
  upper = false,
}) => {
  const Tag = tag;
  const cn = cx(styles.component, styles[`variant-${variant}`], {
    [styles.bold]: bold,
    [styles.upper]: upper
  }, className);

  return <Tag className={cn}>{children}</Tag>;
};
