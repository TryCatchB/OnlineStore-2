import { FC } from "react";
import styles from "./Home.module.css";
import Categories from "../../components/categories/Categories";

const Home: FC = () => {
  return (
    <div className={styles.content}>
      <Categories />
    </div>
  );
};

export default Home;
