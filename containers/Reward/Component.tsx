import type { FC } from "react";
import { Block, Card, Button, Typography } from "@/components";

import styles from "./styles.module.scss";

export const RewardContainer: FC = () => (
  <Block className="container">
    <header className={styles.container__header}>
      <div className={styles.container__logo}></div>
    </header>

    <div className={styles.container__body}>
      <div className={styles.row1}>
        <div>
          <img src="/assets/img/cashback_1.png" width="100%" alt="" />
        </div>
        <div>
          <img src="/assets/img/cashback_2.png" width="100%" alt="" />
        </div>
      </div>

      <div className={styles.row}>
        <Card
          size="md"
          header={
            <Typography variant="14_20" color={3}>
              Royalty
            </Typography>
          }
          className={styles.card}
        >
          <Typography variant="24_32" className={styles.card__title}>
            Receive 3% royalty for every NFT reselling on the secondary market
          </Typography>
          <Typography variant="16_24" color={3}>
            Once you minted the NFT, you become the owner of it. If you decide
            to resell it later, you will enjoy the exclusive right to receive 5%
            royalty forever – for every reselling on the secondary market.
          </Typography>
        </Card>
        <Card
          size="md"
          header={
            <Typography variant="14_20" color={3}>
              Unlock
            </Typography>
          }
          className={styles.card}
        >
          <Typography variant="24_32" className={styles.card__title}>
            Mint your NFT with instantaneous unlock
          </Typography>
          <Typography variant="16_24" color={3}>
            Tokens are packed with different lockups. Most CHO inside Choby NFTs
            have a lockup from 0 months. More than 20% of Choby NFTs will have
            shorter periods than others and some NFTs do not have them at all.
            Try to mint your NFT with instantaneous unlock (with the option of
            instant sale at the market price).
          </Typography>
        </Card>
      </div>

      <div className={styles.row}>
        <Card
          size="md"
          header={
            <Typography variant="14_20" color={3}>
              Bonus pack
            </Typography>
          }
          className={styles.card}
        >
          <Typography variant="24_32" className={styles.card__title}>
            Get bonus CHO after minting
          </Typography>
          <Typography variant="16_24" color={3}>
            Enjoy the opportunity to double the CHO tokens after minting. The
            more you mint, the more you receive.
          </Typography>
        </Card>

        <Card
          size="md"
          header={
            <Typography variant="14_20" color={3}>
              Vesting
            </Typography>
          }
          className={styles.card}
        >
          <Typography variant="24_32" className={styles.card__title}>
            Receive an opportunity to mint an NFT with a short vesting period
          </Typography>
          <Typography variant="16_24" color={3}>
            Tokens are packed with different vesting terms. Most CHO inside
            Choby NFTs have a vesting period from 0 months. Lucky users receive
            an opportunity to mint an NFT with a short vesting period.
          </Typography>
        </Card>
      </div>
    </div>

    <footer className={styles.container__footer}>
      <Button type="variant_4" upper={true}>
        View all perks
      </Button>
    </footer>
  </Block>
);
