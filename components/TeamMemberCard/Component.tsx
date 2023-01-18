import Image from "next/image";
import type { FC, ReactNode } from "react";
import { Typography } from "@/components";

import styles from "./styles.module.scss";

type Props = {
  type?: 1 | 2;
  title: string;
  avatar: ReactNode;
  children: ReactNode;
};

export const TeamMemberCard: FC<Props> = ({
  type = 1,
  title,
  avatar,
  children,
}) => (
  <div className={styles.component}>
    <div className={styles.extra}>
      <div>{avatar}</div>
      <Image
        alt=""
        src={`/assets/img/icon_${type}.svg`}
        width={48}
        height={48}
      />
    </div>
    <header className={styles.header}>
      <Typography tag="h2" variant={4}>
        {title}
      </Typography>
    </header>
    <Typography tag="div" variant={3}>
      {children}
    </Typography>
  </div>
);
