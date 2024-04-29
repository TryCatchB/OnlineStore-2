import { FC } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header.tsx";

const App: FC = () => {
  return (
    <div className={styles.content}>
      <Header />
    </div>
  );
};

export default App;
