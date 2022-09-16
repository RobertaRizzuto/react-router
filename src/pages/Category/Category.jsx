import styles from "./index.module.scss";
// import useFetch from "../../utils/api/use-fetch";
// import ENDPOINTS from "../../utils/api/endpoints";
import { Await, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { lazy, Suspense } from "react";


const MealList = lazy(() => import("../../components/MealList"));
const Category = () => {
  const data = useLoaderData();
  const { categoryName } = useParams();
  // const { data, loading, error } = useFetch(
  //   `${ENDPOINTS.FILTER}${categoryName}`
  // );
  // if (loading) {
  //   return "Loading...";
  // }

  return (
    <Suspense fallback={<div>loading..</div>} className={styles.top}>
      <Await resolve={data} errorElement={<div>Could not load reviews 😬</div>}>
        <div className={styles.Category}>
          <MealList meals={data?.meals} categoryName={categoryName} />
        </div>
      </Await>
    </Suspense>
  );
};

export default Category;
