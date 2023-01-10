import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  type?: "variant_1" | "variant_2" | "variant_3";
  disabled?: boolean;
  size?: "xl";
  children: ReactNode;
};

export const Button: FC<Props> = ({
  children,
  type = '',
  size = '',
  disabled = false,
}) => {
  const cn = cx(styles.btn, styles[size], styles[type]);

  return (
    <button className={cn} disabled={disabled}>
      {children}
    </button>
  );
};
