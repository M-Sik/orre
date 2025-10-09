"use client";

import { Product } from "@/types";
import React from "react";
import styles from "./productItem.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const router = useRouter();
  return (
    <div
      className={styles["product-item"]}
      onClick={() => {
        router.push(
          `/product/detail?brandImg=${product.brandImg}&productImg=${product.productImg}&productName=${product.productName}&productPrice=${product.productPrice}&content=${product.content}&viewCount=${product.viewCount}&isLike=${product.isLike}`
        );
      }}
    >
      <img src={product.brandImg} alt="brand" className={styles["brand-img"]} />
      {product.viewCount && <p className={styles["view-count"]}>조회수 {product.viewCount}</p>}
      <div className={styles["content-wrap"]}>
        <img src={product.productImg} alt="product" className={styles["product-img"]} />
        <div className={styles["content"]}>
          <p className={styles["product-name"]}>{product.productName}</p>
          <p className={styles["product-price"]}>{product.productPrice}</p>
          <p className={styles["content-text"]}>{product.content}</p>
        </div>
      </div>
    </div>
  );
}
