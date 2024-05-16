import { FC } from "react";
import { useFetchElectronicsQuery } from "../../slices/electronicsSlice";
import styles from "./ElectronicsItems.module.css";

const ElectronicsItems: FC = () => {
  const { data, isLoading, error } = useFetchElectronicsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
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
            <h3>{item.title}</h3>
            <span>Price: {item.price}</span>
            <p>Rate: {item.rating.rate}</p>
            <p>Count: {item.rating.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectronicsItems;
