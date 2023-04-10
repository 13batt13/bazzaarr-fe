import { Link } from "react-router-dom";
import styles from "widgets/header/styles/Categories.module.scss";
import { useState } from "react";

export default function Categories() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  function handleOpenDropdown() {
    setIsOpenDropdown(!isOpenDropdown);
  }

  return (
    <div>
      <button onClick={handleOpenDropdown} className={styles.categoriesButton}>
        All Categories
      </button>
      {isOpenDropdown && (
        <div className={styles.categoriesList}>
          <Link to="/category" className={styles.category}>
            Category 1
          </Link>
          <Link to="/category" className={styles.category}>
            Category 2
          </Link>
          <Link to="/category" className={styles.category}>
            Category 3
          </Link>
        </div>
      )}
    </div>
  );
}
