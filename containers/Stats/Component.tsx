import Image from "next/image";
import { Block, Typography, Button, Card } from "@/components";

import styles from "./styles.module.scss";

export const StatsContainer = () => (
  <Block className="container">
    <div className={styles.container}>
      <header className={styles.container__header}>
        <Typography className={styles.container__title}>
          CHO is the key
        </Typography>
      </header>

      <div className={styles.container__body}>
        <div className={styles.block1}>
          <Card size="xxl">
            <ul className={styles.list}>
              <li className="list__item">
                <Typography variant="38_48">$1B</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  Market cap of total
                </Typography>
              </li>
              <li className="list__item">
                <Typography variant="38_48">$112M</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  Market cap of issued
                </Typography>
              </li>
              <li className="list__item">
                <Typography variant="38_48">$0.9</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  Current price
                </Typography>
              </li>
              <li className="list__item">
                <Typography variant="38_48">$1B</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  Total supply
                </Typography>
              </li>
              <li className="list__item">
                <Typography variant="38_48">$0.2</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  IDO price
                </Typography>
              </li>
              <li className="list__item">
                <Typography variant={8}>$40M+</Typography>
                <Typography variant="16_24" className={styles.list__text}>
                  Volume 90d
                </Typography>
              </li>
            </ul>
          </Card>

          <Image src="/assets/img/stats.png" width={640} height={305} alt="" />

          <Card size="xxl">
            <div className={styles.progress__list}>
              <div className={styles.progress}>
                <div className={styles.progress__title}>Incentivization</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>43.775%</div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progress__title}>Seed</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>7.0%</div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progress__title}>Private</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>4.0%</div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progress__title}>Strategic round</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>0.25%</div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progress__title}>Strategic round</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>0.25%</div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progress__title}>Strategic round</div>
                <div className={styles.progress__bar_container}>
                  <div className={styles.progress__bar}></div>
                </div>
                <div className={styles.progress__text}>0.25%</div>
              </div>
            </div>
          </Card>
        </div>

        <div className={styles.block2}>
          <Card size="m">
            <div className={styles.block2__item}>
              <Typography
                tag="h3"
                variant="28_36"
                className={styles.list2__legend}
              >
                What is CHO
              </Typography>
              <ul className={styles.list2}>
                <li>A native token of Choise.com</li>
                <li>The initial CHO token offering kicked off in June 2022</li>
                <li>
                  Listed on numerous centralized, including Gate.io, and
                  decentralized exchanges
                </li>
                <li>
                  Backed by 24 funds and investors including Geek Cartel, Afford
                  capital, Dark Pool, True Block Capital, and more
                </li>
              </ul>
            </div>

            <div className={styles.block2__item}>
              <Typography
                tag="h3"
                variant="28_36"
                className={styles.list2__legend}
              >
                Why it is unique
              </Typography>
              <ul className={styles.list2}>
                <li>All stages, including IDOs, were fully sold out</li>
                <li>
                  Despite the current crypto winter and pressure forming from
                  unlocks, CHO has not dropped in value
                </li>
                <li>
                  Since the launch, the token price has increased by more than
                  3.5x
                </li>
              </ul>
            </div>

            <div className={styles.block2__item}>
              <Typography
                tag="h3"
                variant="28_36"
                className={styles.list2__legend}
              >
                Utilities:
              </Typography>
              <ul className={styles.list2}>
                <li>
                  Used for reducing transaction costs within the ecosystem
                </li>
                <li>Utilized in the Earn & Yield products</li>
                <li>
                  Plays an important role in DAO voting and other key functions
                  of Choise.com
                </li>
                <li>
                  Used for reducing transaction costs within the ecosystem
                </li>
                <li>Utilized in the Earn & Yield products</li>
                <li>
                  Plays an important role in DAO voting and other key functions
                  of Choise.com
                </li>
                <li>Proposing and delivering new developments</li>
                <li>Learn2earn activities</li>
                <li>Ambassador program</li>
                <li>Liquidity mining programs</li>
                <li>
                  Other incentive programs as proposed and accepted by the DAO
                  community
                </li>
                <br />
                <li>Supercharge your voting priviledges via the Charism DAO</li>
                <li>
                  Charism’s Loyalty Program members enjoy an early access to our
                  newest features
                </li>
                <li>
                  Getting your on-chain costs compensated - the greater the
                  stake, the higher the compensation
                </li>
                <li>
                  Getting your DeFi services integrated into the ecosystem
                </li>
                <li>
                  Charism members get to nominate themselves for positions in
                  the ecosystem
                </li>
                <br />
                <li>
                  Deciding on key parameters of the Charism DeFi protocol{" "}
                </li>
                <li>Accepting new proposals</li>
                <li>Defining new utilities for the token</li>
              </ul>
            </div>

            <div className={styles.block2__item}>
              <Typography
                tag="h3"
                variant="28_36"
                className={styles.list2__legend}
              >
                Key Figures:
              </Typography>
              <ul className={styles.list2}>
                <li>
                  Used for reducing transaction costs within the ecosystem
                </li>
                <li>Utilized in the Earn & Yield products</li>
                <li>
                  Plays an important role in DAO voting and other key functions
                  of Choise.com
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.card__title}>
                View more <br /> information
              </div>
              <Button type="variant_4" upper={true}>
                Full tokenomics
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </Block>
);
