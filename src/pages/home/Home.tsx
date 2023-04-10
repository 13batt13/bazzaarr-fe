import axios from "axios";
import ItemCard from "entities/productItem/ui/ProductItemCard";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { ProductItem } from "entities/productItem/types";

export default function Home() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/items`).then((response) => {
      setProductItems(response.data);
    });
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Products for you</h1>

      <div className={styles.productItemsBox}>
        <div className={styles.cardsContainer}>
          {productItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.featuresContainer}>
          <span>History</span>
          <div>
            <div className={styles.historyItem}>
              <div></div>
              <span>Product 1</span>
            </div>
            <div className={styles.historyItem}>
              <div></div>
              <span>Product 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
