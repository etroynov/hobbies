import type { FC } from "react";
import { Block, Typography, Button } from "@/components";

import styles from "./styles.module.scss";

export const StagesContainer: FC = () => (
  <Block>
    <div className="container">
      <div className={styles.container}>
        <header className={styles.container__header}>
          <div>
            <Typography>Stages</Typography>
            <Typography variant={10}>Each stage lasts only 2 weeks and gives a <br /> discount for CHO from 85% to 60%.</Typography>
          </div>
          <div>
            <Button type="variant_5" upper={true}>Learn more</Button>
          </div>
        </header>

        <div className={styles.cards}>
          <img src="/assets/img/stages_cards.svg" alt="" width="100%" />
        </div>

        <div className={styles.info}>
          <div className={styles.row}>
            <div className="col">
              <Typography variant="28_36" className={styles.info__title}>
                Choise.com is the leading earn <br /> marketplace
              </Typography>
              <Typography variant={12}>
                It was started in 2017 to simplify the world of сryptopayments.
                <br />
                <br />
                Now it is one of the leading companies in the world which provides easy access to all earning instruments: staking, farming, high yield interest, cryptocards, payments.
              </Typography>
            </div>
            <div className="col">
              <img src="/assets/img/stats_info.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/stats_logos.svg" alt="" />
  </Block>
);
