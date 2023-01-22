import cx from "classnames";
import type { FC, ReactNode } from "react";
import { Block, Card, Typography, Badge, Button } from "@/components";

import styles from "./styles.module.scss";

type Props = {
  children?: ReactNode;
};

export const TradingContainer: FC<Props> = ({ children }) => (
  <Block className={styles.container}>
    <header className={cx(styles.container__header, "container")}>
      <Typography>
        CHO, one of the top trending tokens on the market, <br /> is a native
        token of Choise.com ecosystem
      </Typography>
    </header>

    <div className={styles.row}>
      <Card
        size="md2"
        className={styles.card}
        header={<img src="/assets/img/trading_logo_1.png" height={89} />}
        footer={
          <div className={styles.info}>
            <Typography variant="28_36">
              Backed by 24 investments funds
            </Typography>
            <img src="/assets/img/trading_logo_3.png" width="100%" alt="" />
          </div>
        }
      >
        <div className={styles.block__1}>
          <Badge variant={3}>
            <Typography variant="38_48" bold={true}>
              750K
            </Typography>
            <Typography variant="20_26">
              registered <br /> users
            </Typography>
          </Badge>

          <Badge variant={4}>
            <Typography variant="38_48" bold={true}>
              1B+
            </Typography>
            <Typography variant="20_26">
              in <br /> transaction
            </Typography>
          </Badge>
        </div>

        <div>
          <Badge variant={5}>
            <Typography variant="38_48" bold={true}>
              2017
            </Typography>
            <Typography variant="14_20">Funded</Typography>
          </Badge>
        </div>
      </Card>
      <Card
        size="md2"
        className={styles.card}
        header={<img src="/assets/img/trading_logo_2.png" height={96} />}
      >
        <div>
          <div className={styles.block__1}>
            <Badge variant={6}>
              <Typography variant="38_48">2200%</Typography>
              <Typography variant="14_20">
                since seed our <br /> private rounds
              </Typography>
            </Badge>

            <Badge variant={3}>
              <Typography variant="38_48">50M</Typography>
              <Typography variant="14_20">
                trading <br /> volume
              </Typography>
            </Badge>
          </div>

          <div className={styles.block__1}>
            <Badge variant={7}>
              <Typography variant="38_48">25M</Typography>
              <Typography variant="14_20">
                market <br /> cap
              </Typography>
            </Badge>

            <Badge variant={5}>
              <Typography variant="38_48">JUNE 22</Typography>
              <Typography variant="14_20">launched</Typography>
            </Badge>
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.controls__item}>
            <Typography variant="28_36" color={1}>
              CHO is super hot
            </Typography>
            <div className={styles.controls__list}>
              <Button type="variant_4">Top 5 trends Coingeecko.com</Button>
              <Button type="variant_4">Top 5 raiting</Button>
              <Button type="variant_4">Top search on BTC.com</Button>
            </div>
          </div>
          <div className={styles.controls__item}>
            <Typography variant="28_36" color={1}>
              Listed on
            </Typography>
             <div className={styles.controls__list}>
              <Button type="variant_6">
                <img src="/assets/img/brand_1.svg" alt="" />
              </Button>
              <Button type="variant_6">
                <img src="/assets/img/brand_2.svg" alt="" />
              </Button>
              <Button type="variant_6">
                <img src="/assets/img/brand_3.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </Block>
);
