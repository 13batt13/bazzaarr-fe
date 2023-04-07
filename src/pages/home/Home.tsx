import axios from "axios";
import ItemCard from "entities/productItem/ui/ProductItemCard";
import styles from "pages/home/Home.module.scss";
import { useEffect, useState } from "react";
import { ProductItem } from "shared/types";

export default function Home() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/items`).then((response) => {
      setProductItems(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Products for you</h2>

      <div className={styles.cardsContainer}>
        {productItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
