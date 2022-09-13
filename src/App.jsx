
import styles from './App.module.scss';
import useFetch from './utils/api/use-fetch';
import ENDPOINTS from './utils/api/endpoints'
import CategoryList from './components/CategoryList';


function App() {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);
  

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className={styles.App}>
      <h1>Home</h1>
      {data ? (
        <CategoryList categories={data.categories} />
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default App;
