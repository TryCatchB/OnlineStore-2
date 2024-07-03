import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories: FC = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Electronics
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/jewelry"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Jewelry
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/mens-clothing"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Men's clothing
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/womens-clothing"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Women's clothing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
