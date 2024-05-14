import { FC } from "react";
import Categories from "../../components/categories/Categories";
import styles from "./Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.content}>
      <Categories />
    </div>
  );
};

export default Home;
