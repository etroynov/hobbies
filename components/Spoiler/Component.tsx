import { useState, type FC, type ReactNode } from "react";

import { Icon } from "../Icon";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  children?: ReactNode;
};

export const Spoiler: FC<Props> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <section className={styles.component}>
      <header
        onClick={() => setVisible(!visible)}
        className={styles.component__header}
      >
        <h3>{title}</h3>
        <button className={styles.component__btn}>
          <Icon name={visible ? 'arrowDown' : 'arrowUp'} />
        </button>
      </header>

      {children && visible ? (
        <div className={styles.component__body}>{children}</div>
      ) : null}
    </section>
  );
};
