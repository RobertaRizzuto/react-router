import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const CategoryListItem = ({ categoryData }) => {
  return (
    <li className={styles.CategoryListItem}>
      <img
        className={styles.img}
        src={categoryData.strCategoryThumb}
        alt={`preview of ${categoryData.strCategory} category`}
      />

      <h3 className={styles.title}>{categoryData.strCategory}</h3>

      <Link
        to={`/${categoryData.strCategory}`}
        title={`${categoryData.strCategory} recipes`}
        className={styles.link}
      >{categoryData.strCategory}</Link>
    </li>
  );
};

export default CategoryListItem;
