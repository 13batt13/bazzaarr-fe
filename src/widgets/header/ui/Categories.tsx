import { Link } from "react-router-dom";
import styles from "widgets/header/styles/Categories.module.scss";
import { MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t } = useTranslation();

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
      <button
        onClick={handleOpenDropdown}
        className={styles.categoriesButton}
        type="button"
      >
        {t("header.categories")}
      </button>
      {isOpenDropdown && (
        <div className={styles.categoriesBackground}>
          <div className={styles.categoriesList}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to="/category" className={styles.category}>
              Category 1
            </Link>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to="/category" className={styles.category}>
              Category 2
            </Link>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to="/category" className={styles.category}>
              Category 3
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
