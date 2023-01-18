import Image from "next/image";
import styles from "./styles.module.scss";

export const CommunityContainer = () => (
  <div className="container">
    <section className={styles.container}>
      <header className={styles.container__header}>
        <h2 className={styles.container__title}>Join our community</h2>
      </header>

      <div className={styles.container__body}>
        <div className={styles.card}>
          <figure className={styles.card__content}>
            <Image
              src={require("./tw.svg")}
              width={80}
              height={68}
              alt="twitter"
            />
            <figcaption className={styles.card__title}>Twitter</figcaption>
          </figure>
        </div>

        <div className={styles.card}>
          <figure className={styles.card__content}>
            <Image
              src={require("./tg.svg")}
              width={80}
              height={68}
              alt="Telegram"
            />
            <figcaption className={styles.card__title}>Telegram</figcaption>
          </figure>
        </div>

        <div className={styles.card}>
          <figure className={styles.card__content}>
            <Image
              src={require("./md.svg")}
              width={80}
              height={68}
              alt="medium"
            />
            <figcaption className={styles.card__title}>Medium</figcaption>
          </figure>
        </div>

        <div className={styles.card}>
          <figure className={styles.card__content}>
            <Image
              src={require("./disc.svg")}
              width={80}
              height={68}
              alt="discord"
            />
            <figcaption className={styles.card__title}>Discord</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
);
