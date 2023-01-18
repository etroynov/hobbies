import type { FC } from "react";
import { Block, Typography, Card } from "@/components";

import styles from "./styles.module.scss";

export const MintContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.container__header}>
        <div className={styles.fix}>
          <Typography variant={9}>
            How to mint one Chobby
          </Typography>
        </div>
        <div>
          <img src="/assets/img/mint_video.png" width="100%" alt="" />
        </div>
      </header>

      <div className={styles.info}>
        <header className={styles.info__header}>
          <Typography>To mint your <br /> how you need</Typography>
          <Typography variant={13} className={styles.info__text}>Each Choby has 1000 CHO inside and there are perks that will reduce lockup, vesting period, provide <br /> cashback, bring you a prize or increase royalty in future releases in 20% of NFTs.</Typography>
        </header>
      </div>

      <div className={styles.info__cards}>
        <Card size="sm2">1. You need your MetaMask wallet</Card>
        <Card size="sm2">2. You can buy 1 Chow at a time.</Card>
        <Card size="sm2">3. Each stage the price goes up to 0.05 <br /> cents or $50b</Card>
        <button className={styles.info__btn}>Mint now</button>
      </div>
    </div>

    <img src="/assets/img/mint_list.png" width="100%" alt="" />
  </Block>
);
