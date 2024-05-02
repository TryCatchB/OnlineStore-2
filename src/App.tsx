import { FC } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header.tsx";
import Categories from "./components/categories/Categories.tsx";

const App: FC = () => {
  return (
    <div className={styles.content}>
      <Header />

      <Categories />
    </div>
  );
};

export default App;
