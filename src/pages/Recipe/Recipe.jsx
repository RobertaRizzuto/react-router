import { Outlet, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import useFetch from "../../utils/api/use-fetch";
import ENDPOINTS from "../../utils/api/endpoints";

const formatRecipe = (data) => {
  const initialRecipe = data.meals?.at(0) ?? {};
  console.log("data", data);
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = initialRecipe[`strIngredient${i}`];
    const value = initialRecipe[`strMeasure${i}`];

    if (!name?.length) {
      continue;
    }

    ingredients.push({ name, value });
  }
  return {
    name: initialRecipe.strMeal,
    id: initialRecipe.idMeal,
    youtubeUrl: initialRecipe.strYoutube,
    thumbnailSrc: initialRecipe.strMealThumb,
    tags: initialRecipe.strTags,
    instructions: initialRecipe.strInstructions,
    ingredients,
  };
};

const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
//   const { tab } = props;
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.DETAIL}?i=${id}`,
    formatRecipe
  );

  return (
    <div className={styles.Recipe}>
      <h1>
        {categoryName} -{recipeName}
      </h1>

      <ul>
        <li>Istruzioni</li>
        <li>Ingredienti</li>
        <li>YouTube</li>
      </ul>

      <Outlet context={data} />
{/* 
      {tab === "youtube" && <p>{data.youtubeUrl}</p>}
      {tab === "instructions" && <p>{data.instructions}</p>} */}
    </div>
  );
};

export default Recipe;
