import cx from "classnames";
import type { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

type Props = {
  type?: "variant_1" | "variant_2" | "variant_3" | "variant_4" | "variant_5" | "variant_6";
  disabled?: boolean;
  size?: "xl";
  className?: string;
  block?: boolean;
  upper?: boolean;
  children: ReactNode;
};

export const Button: FC<Props> = ({
  children,
  className,
  type = "",
  size = "",
  upper = false,
  block = false,
  disabled = false,
}) => {
  const cn = cx(
    styles.btn,
    styles[size],
    styles[type],
    className,
    {
      [styles.block]: block,
      [styles.upper]: upper
    }
  );

  return (
    <button className={cn} disabled={disabled}>
      {children}
    </button>
  );
};
