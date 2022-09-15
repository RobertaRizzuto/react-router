import styles from "./index.module.scss";
// import useFetch from "../../utils/api/use-fetch";
// import ENDPOINTS from "../../utils/api/endpoints";
import { Outlet, useParams, Link, NavLink } from "react-router-dom";

import { useLoaderData } from "react-router-dom";


 

const Recipe = () => {
  const { categoryName, recipeName, 
    // id 
  } = useParams();
  const tabs = [
    { label: "Instructions", path: "./instructions" },
    { label: "Ingredients", path: "./ingredients" },
    { label: "YouTube", path: "./youtube" },
  ];
 const data = useLoaderData();
  // const { data, loading, error } = useFetch(`${ENDPOINTS.DETAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? {};
  // if (!data) {
  //   return "loading...";
  // }
  return (
    <div className={styles.Recipe}>
      <div className={styles.top}>
        <img
          width={100}
          src={recipe.strMealThumb}
          alt={recipeName}
          className={styles.img}
        />

        <div className={styles.text}>
          <h2 className={styles.link}>
            <Link to={`/${categoryName}`}>{categoryName}</Link>
          </h2>
          <h1 className={styles.title}>{recipeName}</h1>
        </div>
      </div>

      <div className={styles.bottom}>
        <ul className={styles.tabs}>
          {tabs.map(({ label, path }) => (
            <li className={styles.tabName} key={path}>
              |  <NavLink className={styles.link} to={path}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr />
        <Outlet context={recipe} className={styles.outlet} />
      </div>
    </div>
  );
};

export default Recipe;
