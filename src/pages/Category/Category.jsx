import styles from "./index.module.scss";
import MealList from "../../components/MealList";
import useFetch from "../../utils/api/use-fetch";
import ENDPOINTS from "../../utils/api/endpoints";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.FILTER}${categoryName}`
  );
  if (loading) {
    return "Loading...";
  }

  return (
    <div className={styles.Category}>
      
      <MealList meals={data?.meals} />
    </div>
  );
};

export default Category;
