"use client";

import { Product } from "@/types";
import React from "react";
import styles from "./productItem.module.scss";
import { useRouter } from "next/navigation";
import HeartFillIcon from "@/app/assets/icons/HeartFillIcon";
import HeartNotFillIcon from "@/app/assets/icons/HeartNotFillIcon";
import useLikeProductStore from "@/store/likeProductStore";

type Props = {
  product: Product;
  date?: string;
  state?: string;
};

export default function ProductItem({ product, date = "", state = "" }: Props) {
  const { deleteLike, addLike } = useLikeProductStore();
  console.log("zzz => ", product.brandImg);
  const router = useRouter();
  return (
    <div
      className={styles["product-item"]}
      onClick={() => {
        let params = `brandImg=${product.brandImg}&productImg=${product.productImg}&productName=${product.productName}&productPrice=${product.productPrice}&content=${product.content}&viewCount=${product.viewCount}`;
        if (product.isLike) {
          params += `&isLike=${product.isLike}`;
        }
        if (date) {
          params += `&date=${date}`;
        }
        if (state) {
          params += `&state=${state}`;
        }
        router.push(`/product/detail?${params}`);
      }}
    >
      {product.isLike != null && product.isLike && (
        <div
          className={styles["heart-icon"]}
          onClick={(e) => {
            e.stopPropagation();
            deleteLike(product.productName);
          }}
        >
          <HeartFillIcon />
        </div>
      )}
      {product.isLike != null && !product.isLike && (
        <div
          className={styles["heart-icon"]}
          onClick={(e) => {
            e.stopPropagation();
            addLike(product);
          }}
        >
          <HeartNotFillIcon />
        </div>
      )}
      {product.brandImg && <img src={product.brandImg} alt="brand" className={styles["brand-img"]} />}
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
