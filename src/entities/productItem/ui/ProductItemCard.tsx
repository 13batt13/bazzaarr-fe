import { ProductItem } from "entities/productItem/types";
import { Link } from "react-router-dom";
import styles from "./ProductItemCard.module.scss";

interface ProductItemCardProps {
  item: ProductItem;
}
export default function ProductItemCard({ item }: ProductItemCardProps) {
  return (
    <Link to={`/product/${item.id}`} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardWrapper}>
        <div className={styles.cardImageBox}>
          <img src={item.images[0]} alt={item.title} />
        </div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.price}>{item.price} rub</span>
        <span className={styles.adress}>
          {item.city},{item.adress}
        </span>
        <span className={styles.adress}>today, 00:00</span>
      </div>
    </Link>
  );
}
