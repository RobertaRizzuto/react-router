import CategoryListItem from "../CategoryListItem";
import styles from "./index.module.scss";

const CategoryList = ({ categories = [] }) => {
 

  return (
    <ul className={styles.list}>
      {categories.map((el) => (
        <CategoryListItem key={el.idCategory} categoryData={el} />
      ))}
    </ul>
  );
};

export default CategoryList;
