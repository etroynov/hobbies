import { Spoiler } from "@/components";

import styles from "./styles.module.scss";

export const FaqContainer = () => (
  <div className="container">
    <section className={styles.container}>
      <header className={styles.container__header}>
        <h2 className={styles.container__title}>Faq</h2>
      </header>

      <div className={styles.container__body}>
        <Spoiler title="How can I mint my Choby?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a
          at aliquid? Eveniet molestias repellendus modi! Accusantium deleniti
          culpa temporibus sequi, quod necessitatibus aspernatur dignissimos,
          sapiente dicta vero facere molestiae!
        </Spoiler>
        <Spoiler title="How can I mint my Choby?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a
          at aliquid? Eveniet molestias repellendus modi! Accusantium deleniti
          culpa temporibus sequi, quod necessitatibus aspernatur dignissimos,
          sapiente dicta vero facere molestiae!
        </Spoiler>
        <Spoiler title="How can I mint my Choby?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a
          at aliquid? Eveniet molestias repellendus modi! Accusantium deleniti
          culpa temporibus sequi, quod necessitatibus aspernatur dignissimos,
          sapiente dicta vero facere molestiae!
        </Spoiler>
      </div>
    </section>
  </div>
);
