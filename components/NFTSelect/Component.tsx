import cx from "classnames";
import type { FC } from "react";
import { Button, Typography } from "@/components";

import styles from "./styles.module.scss";

export const NFTSelect: FC = () => (
  <div className={styles.component}>
    <div className={styles.options}>
      <div className={styles.options__item1}>
        <div>
          <Typography variant={2} upper>
            Minting <br /> 1 NFT + 1000 cho
          </Typography>
        </div>

        <div className={styles.options__price}>
          <Typography variant={15} bold={true}>
            $150
          </Typography>
          <Typography variant={13}>price $0.15</Typography>
        </div>
      </div>

      <div className={styles.options__item2}>
        <div>
          <Typography variant={2} upper>
            Market price
          </Typography>
          <Typography upper variant={13} className={styles.textSelected}>
            1000 cho
          </Typography>
        </div>

        <div className={styles.options__price}>
          <Typography variant={15} bold={true}>
            $940
          </Typography>
          <Typography variant={13} className={styles.textSelected}>
            price $0.94
          </Typography>
        </div>
      </div>
    </div>

    <div className={styles.component__body}>
      <Button type="variant_4" upper={true}>
        Mint now
      </Button>

      <div className={styles.payments}>
        <header className={styles.payments__header}>Pay with</header>

        <div className={styles.payments__body}>
          <button className={styles.payments__btn}>
            <img src="/assets/img/visa.svg" />
          </button>
          <button className={styles.payments__btn}>
            <img src="/assets/img/mastercard.svg" />
          </button>
        </div>
      </div>
    </div>

    <div className={cx(styles.component__block1, styles.textSelected)}>
      Mint now 1 Choby and get 1000 CHO at an attractive price.
      <a className={styles.link}>Check CoinMarketCap</a>
    </div>

    <div className={styles.video}>
      <img src="/assets/img/youtube.svg" />
      <Typography variant={2}>How to mint Chow?</Typography>
    </div>

    <footer className={styles.component__footer}>
      <div className={styles.footer__title}>
        <Typography variant={3} className={styles.footer__text}>
          Collected for now
        </Typography>
        <Typography variant={12}>$21,524,244</Typography>
      </div>
      <img src="/assets/img/progress_1.svg" alt="" />
    </footer>
  </div>
);
