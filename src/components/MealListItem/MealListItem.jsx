import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.scss';

const MealListItem = (props) => {
  const {meal = {}, categoryName = ''} = props;

  return (
      <li className={styles.MealListItem}>
        
          <img
              className={styles.img}
              src={meal.strMealThumb}
              alt={`preview of ${meal.strCategory} recipe`}
          />
        
        
          <h3 className={styles.title}>{meal.strMeal}</h3>
      
        <Link to={`/${categoryName}/${meal.strMeal}`}
              title={`naviga sul catalogo ${meal.strMeal}`}
              className={styles.link}
        >
          {meal.strMeal}
        </Link>
      </li>
  );
};

export default MealListItem