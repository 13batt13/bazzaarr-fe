import { ProductItem } from "entities/productItem/types";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  item: ProductItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <Link to={`/product/${item.id}`} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardWrapper}>
        <div className={styles.cardImageBox}>
          <img src={item.images[0]} alt={item.title} />
        </div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.price}>{`${item.price} ${item.currency}`}</span>
        <span
          className={styles.adress}
        >{`${item.adress.city}, ${item.adress.street}`}</span>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <span className={styles.adress}>{`${item.date}, ${item.time}`}</span>
      </div>
    </Link>
  );
}
