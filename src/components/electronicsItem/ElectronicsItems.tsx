import { FC } from "react";
import { Link } from "react-router-dom";
import { useFetchElectronicsQuery } from "../../slices/electronicsSlice";
import Loader from "../loader/Loader";
import ErrorMessage from "../error/ErrorMessage";
import Categories from "../categories/Categories";
import styles from "./ElectronicsItems.module.css";

const ElectronicsItems: FC = () => {
  const { data, isLoading, error } = useFetchElectronicsQuery({});

  const createLink = (id: number) => `/details/${id}`;

  if (isLoading) return <Loader />;

  return (
    <div>
      <Categories />
      <div className={styles.content}>
        {error && <ErrorMessage error={error} />}
        {data.map((item) => (
          <Link to={createLink(item.id)} className={styles.item} key={item.id}>
            <div className={styles.itemContent}>
              <img className={styles.image} src={item.image} alt="image" />
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsItems;
