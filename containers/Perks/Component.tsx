import cx from "classnames";
import type { FC, ReactNode } from "react";
import { Block, Typography } from "@/components";

import styles from "./styles.module.scss";

type Props = {
  children?: ReactNode;
};

export const PerksContainer: FC<Props> = ({ children }) => (
  <Block className={cx(styles.container, "container")}>
    <header className={styles.container__header}>
      <Typography variant="92_96">
        Choise.com creates <br /> a new page in <br /> crypto history
      </Typography>
      <Typography variant="20_26" className={styles.second}>
        Chobby World not only creates NFT <br /> that have value, but more than
        that <br /> you can mint a rare
      </Typography>
    </header>

    <div className={styles.container__body}>
      <div className={styles.container__col}>
        <img src="/assets/img/perks_1.png" width="100%" alt="" />
        <img
          src="/assets/img/perks_3.png"
          width="100%"
          alt=""
          className={styles.item__3}
        />
      </div>
      <div className={styles.container__col}>
        <img
          src="/assets/img/perks_2.png"
          width="100%"
          alt=""
          className={styles.item__1}
        />
        <img
          src="/assets/img/perks_4.png"
          width="100%"
          alt=""
          className={styles.item__2}
        />
      </div>
    </div>

    <footer>
      <img src="/assets/img/perks_description.png" width="100%" alt="" />
    </footer>
  </Block>
);
