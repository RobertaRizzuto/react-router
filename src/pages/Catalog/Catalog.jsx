
import styles from './index.module.scss';
import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header';
import { useLoaderData } from 'react-router-dom';


function Catalog() {
  const data = useLoaderData();
  // const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);
  

  // if (loading) {
  //   return 'Loading...';
  // }

  return (
    <div className={styles.Catalog}>
      <h1>Home</h1>
      {data ? (
        <CategoryList categories={data.categories} />
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default Catalog;