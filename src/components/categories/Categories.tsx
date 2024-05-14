import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories: FC = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/jewelry">Jewelry</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/mens-clothing">Men's clothing</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/womens-clothing">Women's clothing</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
