import Image from "next/image";
import { Block, Typography, TeamMemberCard } from "@/components";

import styles from "./styles.module.scss";

export const TeamContainer = () => (
  <Block className={styles.container}>
    <div className="container">
      <header className={styles.container__header}>
        <Typography tag="h2">Powered by THE OLDEST PROS</Typography>
        <Typography variant={2} upper={true}>meet the team</Typography>
      </header>

      <div className={styles.container__body}>
        <div className={styles.row}>
          <TeamMemberCard
            title="Vladimir Gorbunov"
            avatar={
              <Image
                alt=""
                src="/assets/img/team_4.png"
                width={150}
                height={150}
              />
            }
          >
            Founder and CEO. He is a FinTech entrepreneur with more than 15
            years of experience building companies. In addition to Choise.com,
            he has either created or played a leading role in more than 10
            successful enterprises with a market cap well over $500m.
          </TeamMemberCard>
          <TeamMemberCard
            title="Austin Kimm"
            avatar={
              <Image
                alt=""
                src="/assets/img/team_1.png"
                width={150}
                height={150}
              />
            }
          >
            Director of strategy and investments. 25 year’s experience as a CEO of international companies with focus on: all types of financial services, especially insurance and latterly cryptocurrencies.
          </TeamMemberCard>
          <TeamMemberCard
            title="Andrey Dyakonov"
            avatar={
              <Image
                alt=""
                src="/assets/img/team_3.png"
                width={150}
                height={150}
              />
            }
          >
            Chief Commercial Officer. A seasoned business development executive with a proven track record in the industry. Prior to joining the crypto movement, Andrey ran and staffed political campaigns in the EU, and represented 2 countries in the United Nations program UNAOC.
          </TeamMemberCard>
        </div>

        <div className={styles.row2}>
        <TeamMemberCard
            type={2}
            title="Anastasiya Kor"
            avatar={
              <Image
                alt=""
                src="/assets/img/team_2.png"
                width={150}
                height={150}
              />
            }
          >
            Expert in marketing, project management and community building with 10 years of expertise in international businesses and diverse international academic experience gained in the US, Spain and South Korea
          </TeamMemberCard>

          <div className={styles.block}>
            <header>
              <Typography tag="h3" className={styles.upper}>and</Typography>
              <Typography tag="h3" className={styles.upper}>oooooooover 160 people in the team</Typography>
            </header>
          </div>
        </div>
      </div>
    </div>
  </Block>
);
