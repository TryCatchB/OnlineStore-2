import { FC } from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage: FC = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.errorMessage}>Page not found</h1>
    </div>
  );
};

export default ErrorPage;
