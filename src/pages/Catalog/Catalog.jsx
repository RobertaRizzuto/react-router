import styles from "./index.module.scss";
import CategoryList from "../../components/CategoryList";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

function Catalog() {
  const data = useLoaderData();
  // const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  // if (loading) {
  //   return 'Loading...';
  // }
  const [search, setSearch] = useSearchParams();
  const page = search?.get("page") ?? 1;
  const perPage = 4;

  const pagination = useMemo(() => {
    return data.categories?.slice((page - 1) * perPage, page * perPage);
  }, [page, data.categories]);

  const onHandleClick = (variation) => {
    setSearch((prev) => {
      return { page: Number(prev.get("page")) + variation };
    });
  };

  return (
    <div className={styles.Catalog}>
      <h1>Home</h1>{" "}
      <div className={styles.buttons}>
        <button
          className={styles.minus}
          disabled={page <= 1 && true}
          onClick={onHandleClick.bind(this, -1)}
        >
          previous
        </button>
        <button
          className={styles.plus}
          disabled={page >= Math.ceil(data.categories.length / perPage) && true}
          onClick={onHandleClick.bind(this, +1)}
        >
          next
        </button>
      </div>
      {data ? (
        <CategoryList categories={pagination} />
      ) : (
        "Si è verificato un errore!"
      )}
      <div className={styles.buttons}>
        <button
          className={styles.minus}
          disabled={page <= 1 && true}
          onClick={onHandleClick.bind(this, -1)}
        >
          previous
        </button>
        <button
          className={styles.plus}
          disabled={page >= Math.ceil(data.categories.length / perPage) && true}
          onClick={onHandleClick.bind(this, +1)}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Catalog;
