import cx from "classnames";
import type { FC, ReactNode } from "react";
import { Block, Button, Typography } from "@/components";

import styles from "./styles.module.scss";

type Props = {
  children?: ReactNode;
};

export const PoolContainer: FC<Props> = ({ children }) => (
  <Block className={styles.container}>
    <img src="/assets/img/prize_pool.png" width="100%" alt="" />
    <footer className={styles.container__footer}>
      <Button type="variant_4" upper={true}>
        View all perks
      </Button>
    </footer>
  </Block>
);
