import { FC } from "react";
import { useFetchElectronicsQuery } from "../../slices/electronicsSlice";
import styles from "./ElectronicsItems.module.css";
import Loader from "../loader/Loader";

const ElectronicsItems: FC = () => {
  const { data, isLoading, error } = useFetchElectronicsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const errorMessage = error
    ? "status" in error
      ? `Error: ${error.status} - ${error.data}`
      : "Error: An unknown error occurred."
    : "";

  return (
    <div className={styles.content}>
      {error && <p>{errorMessage}</p>}
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.itemContent}>
            <img className={styles.image} src={item.image} alt="image" />
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.price}>Price: {item.price}</span>
            <p className={styles.rate}>Rate: {item.rating.rate}</p>
            <p className={styles.count}>Count: {item.rating.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectronicsItems;
