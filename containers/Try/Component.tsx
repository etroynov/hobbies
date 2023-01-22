import type { FC } from 'react';
import { Block, Typography, Button } from '@/components';

import styles from './styles.module.scss';

export const TryContainer: FC = () => (
  <Block>
    <div className="container">
      <header className={styles.container__header}>
        <Typography variant="92_96">
          Try to get favorite <br /> Chobby
        </Typography>
      </header>

      <div className={styles.row}>
        <img src="/assets/img/try_cards.png" width="100%" alt="" />
        <img src="/assets/img/item_1.png" width="100%" alt="" />
      </div>
    </div>

    <div>
      <img src="/assets/img/try_cards_1.png" width="100%" alt="" />
      <div className={styles.container__controls}>
        <Button type="variant_4" upper={true}>View all gallery</Button>
      </div>
    </div>
  </Block>
  
);
