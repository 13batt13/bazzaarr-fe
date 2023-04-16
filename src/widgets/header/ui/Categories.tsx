import { Link } from "react-router-dom";
import styles from "widgets/header/styles/Categories.module.scss";
import { MouseEventHandler, useState } from "react";

export default function Categories() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOpenDropdown: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsOpenDropdown((prev) => !prev);
  };

  return (
    <div
      onClick={() => {
        setIsOpenDropdown(false);
      }}
    >
      <button onClick={handleOpenDropdown} className={styles.categoriesButton}>
        All Categories
      </button>
      {isOpenDropdown && (
        <div className={styles.categoriesBackground}>
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
        </div>
      )}
    </div>
  );
}
