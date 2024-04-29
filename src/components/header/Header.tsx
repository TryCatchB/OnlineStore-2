import { FC } from "react";
import bell from "./icons/bell.png";
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
        <div className="categories">
          <button type="button">Categories</button>
          <div className="list">
            <ul>
              <li>electronics</li>
              <li>jewelery</li>
              <li>men's clothing</li>
              <li>women's clothing</li>
            </ul>
          </div>
        </div>
        <form action="#" className="form">
          <input type="text" />
          <button type="button">Search</button>
        </form>
        <div className="control-panel">
          <button className="favourite" type="button">
            <img src={bell} alt="Bell" />
          </button>
          <button className="cart" type="button">
            <img src={cart} alt="Cart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
