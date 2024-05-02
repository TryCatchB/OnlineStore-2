import { FC } from "react";
import styles from "./Categories.module.css";

const Categories: FC = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#">Electronics</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Jewelery</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Men's clothing</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Women's clothing</a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
