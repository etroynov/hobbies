import cx from "classnames";
import { type FC, type ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  tag?: "div" | "p" | "span" | "h1" | "h2" | "h3";
  color?: 1 | 2 | 3 | 4;
  variant?:
    | "48_60"
    | "13_16"
    | "14_20"
    | "16_24"
    | "20_26"
    | "24_32"
    | "28_36"
    | "38_48"
    | "92_96"
    | "96_120";
  bold?: boolean;
  upper?: boolean;
  children: ReactNode;
  className?: string;
};

export const Typography: FC<Props> = ({
  tag = "div",
  variant = "48_60",
  color,
  bold,
  children,
  className,
  upper = false,
}) => {
  const Tag = tag;
  const cn = cx(
    styles.component,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    {
      [styles.bold]: bold,
      [styles.upper]: upper,
    },
    className
  );

  return <Tag className={cn}>{children}</Tag>;
};
