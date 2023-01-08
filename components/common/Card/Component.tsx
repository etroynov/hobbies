import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }) => (
  <section className={styles.card}>
    <header className={styles.card__header}>
      <h2 className={styles.card__title}>Royalty</h2>
    </header>
    <section className={styles.card__body}>{children}</section>
    <footer className={styles.card__footer}>Once you minted the NFT, you become the owner of it. If you decide to resell it later, you will enjoy the exclusive right to receive 5% royalty forever – for every reselling on the secondary market.</footer>
  </section>
);
