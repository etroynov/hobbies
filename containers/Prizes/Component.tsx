import type { FC } from "react";
import { Block, Badge, Card, Typography, NFTSelect } from "@/components";

import styles from "./styles.module.scss";

export const PrizesContainer: FC = () => (
  <Block className={styles.container}>
    <div className="container">
      <div className={styles.row}>
        <div>
          <img
            alt=""
            src="/assets/img/main_logo.svg"
            className={styles.container__logo}
          />

          <div className={styles.meta}>
            <div className={styles.container__list}>
              <Card>
                <Typography variant={2} className={styles.badge__text}>
                  Get a cool, rare or super rare Chobby NFT
                </Typography>
                <Badge variant={2}>+ 1000 tokens</Badge>
                <Typography variant={13} className={styles.badge__text2}>
                  in one mint
                </Typography>
              </Card>
              <Card>
                <Typography variant={2}>
                  CHO tokens in each Chobby NFT have different lockups and
                  vesting periods
                </Typography>
              </Card>
              <Card>
                <Typography variant={2}>
                  Over 20% of NFT’s have short or no lockups\vestings, casbacks
                  and prize perks up to 100 000$
                </Typography>
              </Card>
            </div>

            <div className={styles.container__block}>
              <Card>
                Get up to 3% royalty from any future resells on a secondary
                market as a first owner
              </Card>

              <div className={styles.container__social}>
                <Badge icon="discord">Discord</Badge>
                <Badge icon="tw">Twitter</Badge>
                <Badge icon="instagram">Instagram</Badge>
                <Badge icon="medium">Medium</Badge>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className={styles.info} size="md">
            <header className={styles.info__header}>
              <div className={styles.info__logos}>
                <i className={styles.info__logo}></i>
                <Typography variant={14}>Green stage</Typography>
              </div>
              <div>
                <Badge variant={2}>85% discount </Badge>
              </div>
            </header>

            <div className={styles.clock}>
              <header className={styles.clock__title}>
                <Typography variant={13} upper={true}>
                  Stage ends in
                </Typography>
              </header>

              <div className={styles.clock__numbers}>
                <div>
                  <div className={styles.clock__key}>days</div>
                  <div className={styles.clock__value}>30</div>
                </div>

                <div className={styles.clock__divider}>:</div>

                <div>
                  <div className={styles.clock__key}>hours</div>
                  <div className={styles.clock__value}>24</div>
                </div>

                <div className={styles.clock__divider}>:</div>
                
                <div>
                  <div className={styles.clock__key}>minutes</div>
                  <div className={styles.clock__value}>59</div>
                </div>

                <div className={styles.clock__divider}>:</div>

                <div>
                  <div className={styles.clock__key}>seconds</div>
                  <div className={styles.clock__value}>59</div>
                </div>
              </div>
            </div>

            <NFTSelect />
          </Card>
        </div>
      </div>
    </div>
  </Block>
);
