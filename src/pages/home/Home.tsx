import axios from "axios";
import ItemCard from "entities/productItem/ui/ProductItemCard";
import { useEffect, useState } from "react";
import { ProductItem } from "entities/productItem/types";
import styles from "./Home.module.scss";

export default function Home() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/items").then((response) => {
      setProductItems(response.data);
    });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Products for you</h1>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.cardsContainer}>
          {productItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.featuresContainer}>
          <span>Recently viewed products</span>
          <div>
            <div className={styles.historyItem}>
              <div />
              <span>Product 1</span>
            </div>
            <div className={styles.historyItem}>
              <div />
              <span>Product 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
