import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchElectronicsQuery } from "../../slices/electronicsSlice";
import Loader from "../loader/Loader";
import ErrorMessage from "../error/ErrorMessage";
import styles from "./ElectronicItem.module.css";

const ElectronicsItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useFetchElectronicsQuery({});

  if (isLoading) return <Loader />;

  const item = data?.find((item: { id: number }) => item.id === Number(id));

  if (!item) return <p>Item is not found</p>;

  return (
    <div className={styles.content}>
      {error && <ErrorMessage error={error} />}
      <div className={styles.item}>
        <img className={styles.image} src={item.image} alt="image" />
        <h3 className={styles.title}>{item.title}</h3>
      </div>
    </div>
  );
};

export default ElectronicsItem;
