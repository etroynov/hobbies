import { Block, Typography, Button } from "@/components";

import styles from "./styles.module.scss";

export const LearnContainer = () => (
  <Block>
    <div className="container">
      <div className={styles.container}>
        <Typography variant={4} className={styles.container__text}>
          How the metafi solution works
        </Typography>

        <Button className={styles.container__btn}>Learn how</Button>
      </div>
    </div>
  </Block>
);
