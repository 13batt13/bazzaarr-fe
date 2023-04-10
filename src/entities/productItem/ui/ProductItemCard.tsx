import styles from "./ProductItemCard.module.scss";
import { useNavigate } from "react-router";
import { ProductItem } from "entities/productItem/types";

interface ProductItemCardProps {
  item: ProductItem;
}
export default function ProductItemCard({ item }: ProductItemCardProps) {
  const navigate = useNavigate();
  const navigateToProductPage = () => {
    navigate(`/product/${item.id}`, { state: { id: item.id } });
  };

  return (
    <div className={styles.cardWrapper} onClick={navigateToProductPage}>
      <div className={styles.cardImageBox}>
        <img src={item.images[0]} alt={item.title} />
      </div>
      <span className={styles.price}>{item.price} rub</span>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.adress}>{item.city}</span>
      <span className={styles.adress}>{item.adress}</span>
    </div>
  );
}
