import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { ProductItem } from "entities/productItem/types";
import styles from "./Product.module.scss";

const initialProductItem = {
  id: "",
  images: [""],
  category: "",
  price: "",
  currency: "",
  title: "",
  description: "",
  adress: { city: "", street: "" },
  date: "",
  time: "",
};

export default function Product() {
  const { id } = useParams();

  const [productItem, setProductItem] =
    useState<ProductItem>(initialProductItem);

  useEffect(() => {
    axios.get(`http://localhost:4000/items/${id}`).then((response) => {
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
        <span className={styles.price}>{productItem.price}</span>
      </div>
      <span className={styles.description}>{productItem.description}</span>
      <div>
        <span className={styles.adress}>{productItem.adress.city}</span>
        <span className={styles.adress}>{productItem.adress.street}</span>
      </div>
    </div>
  );
}
