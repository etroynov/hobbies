import cx from 'classnames';
import type { FC } from "react";
import { Block, Card, Typography } from "@/components";

import styles from "./styles.module.scss";

export const DirectorContainer: FC = () => (
  <Block className={cx(styles.component, 'container')}>
    <div className={styles.user}>
      <div>
        <Typography className={styles.user__name} variant={10}>Austin Kimm</Typography>
        <Typography variant="16_24">
          Director of strategy and <br /> investments of Choise.com
        </Typography>
      </div>
      <div><img src="/assets/img/director.png" /></div>
    </div>

    <Card className={styles.user__text}>
      <Typography variant={16}>Choise.com following it series A round with its first NTO open doors for the new market, where NFT could have a real value (being overbacked by tokens), where secondary market is from the scratch, where community could get their favorite tokens on the terms of top tier investment funds.</Typography>
    </Card>
  </Block>
);
