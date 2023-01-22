import type { FC } from "react";
import { Block, Typography, Button, GoalCard } from "@/components";

import styles from "./styles.module.scss";

export const GoalsContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.component__header}>
        <Typography className={styles.component__title}>
          NTO goals and <br /> associated plans
        </Typography>
      </header>
      <nav className={styles.component__navbar}>
        <Button type="variant_2" block={true} className={styles.upper}>
          stage 1
        </Button>
        <Button type="variant_2" block={true} className={styles.upper}>
          stage 2
        </Button>
        <Button type="variant_2" block={true} className={styles.upper}>
          stage 3
        </Button>
        <Button type="variant_2" block={true} className={styles.upper}>
          stage 4
        </Button>
        <Button type="variant_2" block={true} className={styles.upper}>
          stage 5
        </Button>
      </nav>

      <div className={styles.component__body}>
        <div className={styles.row}>
          <GoalCard
            header={
              <Typography variant="20_26" color={3}>
                NTO <br /> development
              </Typography>
            }
          >
            <Typography variant="20_26" color={2} className={styles.card__text}>
              NTO Wallet
            </Typography>
            <Typography variant="16_24" className={styles.card__title}>
              Development of Choise.com’s unique and simple <br /> decentralized
              wallet, allowing users to store their <br /> valuable NFTs.
            </Typography>
          </GoalCard>

          <GoalCard
            header={
              <Typography variant="20_26" color={3}>
                Choise.com <br /> development
              </Typography>
            }
          >
            <Typography
              variant="20_26"
              className={styles.card__text}
              color={2}
            >
              New B2B App/Web App
              <br />
              <br />
              B2B Asset Tokens
            </Typography>
          </GoalCard>
        </div>
        <div className={styles.row2}>
          <GoalCard>
            <div className={styles.row3}>
              <div>
                <Typography variant="20_26" color={3}>
                  Power-ups for <br /> Choby holders
                </Typography>
              </div>

              <div>
                <Typography variant="20_26" color={2} className={styles.text3}>
                  Choby <br /> Drop
                </Typography>
                <Typography variant="16_24">
                  100 Chobies drop for participants <br />
                  of the first-ever NTO.
                </Typography>
              </div>

              <div>
                <Typography variant="20_26" color={2} className={styles.text3}>
                  Choby <br /> Merch
                </Typography>
                <Typography variant="16_24">
                  Cool, in-trend, and high-quality <br /> merchandise with your
                  own Choby or <br /> Chobies to show off on the streets, <br />{" "}
                  with worldwide shipping.
                </Typography>
              </div>
            </div>
          </GoalCard>
        </div>
      </div>
    </div>
  </Block>
);
