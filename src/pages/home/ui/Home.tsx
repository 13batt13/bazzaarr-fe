import axios from "axios";
import ProductCard from "entities/productItem/ui/ProductCard";
import { useEffect, useState } from "react";
import { ProductItem } from "entities/productItem/types";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.scss";

export default function Home() {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/items").then((response) => {
      setProductItems(response.data);
    });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{t("home.for_you")}</h1>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.cardsContainer}>
          {productItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.featuresContainer}>
          <span>{t("home.recent")}</span>
          <div>
            <div className={styles.historyItem}>
              <div />
              {/* eslint-disable-next-line i18next/no-literal-string */}
              <span>Product 1</span>
            </div>
            <div className={styles.historyItem}>
              <div />
              {/* eslint-disable-next-line i18next/no-literal-string */}
              <span>Product 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
