import Image from "next/image";
import styles from "./styles.module.scss";

export const PartnersContainer = () => (
  <section className={styles.container}>
    <div className="container">
      <header className={styles.container__header}>
        <h2 className={styles.container__title}>Partners</h2>
        <div className={styles.container__description}>
          Each stage last 2 weeks and offer each price of NFT <br /> goes up to
          $50, meaning that price per each CHO <br /> increased to 5 centss
        </div>
      </header>

      <div className={styles.container__body}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (number) => (
            <div key={number}>
              <Image src={require(`./img/logo_${number}.svg`)} alt="" />
            </div>
          )
        )}
      </div>
    </div>
  </section>
);
