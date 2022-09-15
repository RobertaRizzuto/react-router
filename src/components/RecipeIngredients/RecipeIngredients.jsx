import styles from "./index.module.scss";

import React from "react";
import { useOutletContext } from "react-router-dom";

export const RecipeIngredients = () => {
  const recipe = useOutletContext();

  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className={styles.RecipeIngredients}>
      
        {!!recipe &&
          indexes.map(
            (index) =>
              recipe[`strIngredient${index}`]?.length >= 1 && (
                <li key={index}>
                  {recipe[`strIngredient${index}`]}:
                  {recipe[`strMeasure${index}`]}
                </li>
              )
          )}
    </div>
  );
};

export default RecipeIngredients;
