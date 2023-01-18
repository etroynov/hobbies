import cx from 'classnames';
import Link from 'next/link';
import type { FC } from "react";

import { Logo } from "../Logo";
import { Button } from "../Button";

import styles from "./styles.module.css";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={cx('container', styles.component)}>
      <Logo />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a href="#perks">perks</a>
          </li>
          <li className={styles.menu__item}>
            <a href="#gallery">gallery</a>
          </li>
          <li className={styles.menu__item}>
            <a href="#about">about Choise & CHO</a>
          </li>
          <li className={styles.menu__item}>
            <a href="#stages">stages</a>
          </li>
          <li className={styles.menu__item}>
            <a href="#roadmap">roadmap</a>
          </li>
        </ul>
      </nav>
      <div>
        <Button type="variant_3">
          <i className={styles.metamask}></i>Connect wallet
        </Button>
      </div>
    </div>
    <div className={cx('container', styles.row)}>
      <div className='col'>
        <Link href="/" className={styles.link}>terms and conditions</Link>
        <Link href="/" className={styles.link}>privacy policy</Link>
      </div>
      <div>
        <div className={styles.year}>2022 - {new Date().getFullYear()}</div>
      </div>
    </div>
  </footer>
);
