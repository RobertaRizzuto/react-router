import { Outlet, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import useFetch from "../../utils/api/use-fetch";
import ENDPOINTS from "../../utils/api/endpoints";

const Recipe = () => {
    const { categoryName, recipeName, id } = useParams();
  
    const { data, loading, error } = useFetch(
      `${ENDPOINTS.DETAIL}?i=${id}`
    );
    const initialRecipe = data?.meals?.at(0) ?? {};
    console.log(initialRecipe)
    return (
      <div className={styles.Recipe}>
        <h1>
          {categoryName} -{recipeName}
        </h1>
      <p>{initialRecipe?.strInstructions}</p>
        <ul>
          <li>Istruzioni</li>
          <li>Ingredienti</li>
          <li>YouTube</li>
        </ul>
  
        <Outlet context={data} />
  
        {/* {tab === "youtube" && <p>{initialRecipe?.youtubeUrl}</p>}
        {tab === "instructions" && <p>{initialRecipe?.instructions}</p>} */}
      </div>
    );


    }

    export default Recipe
