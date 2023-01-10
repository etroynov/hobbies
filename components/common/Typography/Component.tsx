import cx from "classnames";
import { type FC, type ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  variant?: 1 | 2;
  size?: "s";
  bold?: boolean;
  children: ReactNode;
};

export const Typography: FC<Props> = ({ size = "s", bold, children }) => {
  const Tag = "div";
  const cn = cx(styles.component, styles[size], { [styles.bold]: bold });

  return <Tag className={cn}>{children}</Tag>;
};
