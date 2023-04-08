import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ProductItem } from "shared/types";
import styles from "pages/product/Product.module.scss";

const initialProductItem = {
  id: "",
  images: [],
  category: "",
  price: "",
  title: "",
  description: "",
  city: "",
  adress: "",
};

export default function Product() {
  const {
    state: { id },
  } = useLocation();

  const [productItem, setProductItem] =
    useState<ProductItem>(initialProductItem);

  useEffect(() => {
    axios.get(`http://localhost:3001/items/${id}`).then((response) => {
      setProductItem(response.data);
    });
  }, [id]);

  return (
    <div className={styles.root}>
      <div className={styles.imageBox}>
        <img src={productItem.images[0]} alt={productItem.title} />
      </div>
      <div>
        <span className={styles.title}>{productItem.title}</span>
        <span className={styles.price}>{productItem.price} rub</span>
      </div>
      <span className={styles.description}>{productItem.description}</span>
      <div>
        <span className={styles.adress}>{productItem.city}</span>
        <span className={styles.adress}>{productItem.adress}</span>
      </div>
    </div>
  );
}