import type { FC } from 'react';
import { Block, Typography, Button } from '@/components';

import styles from './styles.module.scss';

export const TryContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.container__header}>
        <Typography variant={9}>
          Try to get favorite <br /> Chobby
        </Typography>
      </header>

      <div className={styles.row}>
        <div className={styles.container__cards}>
          <img src="/assets/img/try_cards.svg" width="100%" alt="" />
        </div>
        <div>
          <img src="/assets/img/item_1.png" width="100%" alt="" />
        </div>
      </div>
    </div>

    <div>
      <img src="/assets/img/try_cards_1.png" alt="" />
      <div className={styles.container__controls}>
        <Button type="variant_4" upper={true}>View all gallery</Button>
      </div>
    </div>
  </Block>
  
);
