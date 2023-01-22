import type { FC } from "react";
import { Block, Typography, Card } from "@/components";

import styles from "./styles.module.scss";

export const PlansContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.container__header}>
        <Typography tag="h2" variant="96_120">
          Our plans
        </Typography>
        <Typography variant="24_32">
          Within 24 months we expect to achieve
        </Typography>
      </header>

      <div className={styles.component}>
        <div className={styles.priceBlock}>
          <Typography variant="96_120" color={2}>$33 000 000</Typography>
          <div className={styles.priceBlock__list}>
            <Card
              size="m"
              className={styles.priceBlock__item}
              header={<Typography variant="24_32">Product Enhancement</Typography>}
            >
              <Typography variant="16_24">
                $6m to fast-track product roll-out thereby ensuring a market
                lead, including B2B complete white label offering
              </Typography>
            </Card>

            <Card
              size="m"
              className={styles.priceBlock__item}
              header={
                <Typography variant="24_32">Customer Acquisition</Typography>
              }
            >
              <Typography variant="16_24">
                $12m to acquire a minimum of 2m registered users and 100 new B2B
                white label customers
              </Typography>
            </Card>

            <Card
              size="m"
              className={styles.priceBlock__item}
              header={<Typography variant="24_32">Token Management</Typography>}
            >
              <Typography variant="16_24">
                $15m management of token liquidity including the listing on
                leading exchanges
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <img src="/assets/img/plans.png" alt="" className={styles.placeholder} />
  </Block>
);
