import { FC } from "react";
import favourite from "./icons/favourite.png";
import cart from "./icons/shopping-cart.png";
import logo from "./icons/shopping-online.png";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </h1>
        <form action="#" className={styles.form}>
          <input
            className={styles.formInput}
            placeholder="Search"
            type="text"
          />
          <button className={styles.formButton} type="button">
            Search
          </button>
        </form>
        <div className={styles.controlPanel}>
          <button type="button">
            <img src={favourite} alt="Favourite" />
            <span>0</span>
          </button>
          <button type="button">
            <img src={cart} alt="Cart" />
            <span>0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
