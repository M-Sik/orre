"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import styles from "./page.module.scss";

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const brandImg = searchParams.get("brandImg") as string;
  const productImg = searchParams.get("productImg") as string;
  const productName = searchParams.get("productName") as string;
  const productPrice = searchParams.get("productPrice") as string;
  const content = searchParams.get("content") as string;
  const viewCount = searchParams.get("viewCount") as string;
  const isLike = searchParams.get("isLike");
  const date = searchParams.get("date");
  const state = searchParams.get("state");

  console.log(brandImg, productImg, productName, productPrice, content, viewCount, isLike, date, state);
  return (
    <section className={styles["product-detail-page"]}>
      <div className={styles["product-image-wrap"]}>
        <img src={productImg} alt="brand" className={styles["product-image"]} />
        <p className={styles["view-count"]}>조회수 {viewCount}</p>
        <p className={styles["image-count"]}>1 / 1</p>
      </div>
      <section className={styles["content-wrap"]}>
        <img src={brandImg} alt="" className={styles["brand-img"]} />
        <p className={styles["product-name"]}>{productName}</p>
        <p className={styles["product-content"]}>{content}</p>
        <p className={styles["product-price"]}>{productPrice}</p>
        {date && state && (
          <p className={styles["date-state"]}>
            {date}
            <span className={`${state === "미승인" ? styles["gray"] : ""}`}>{state}</span>
          </p>
        )}
        {state === "미승인" && (
          <p className={styles["approval-text"]}>
            이미지 해상도가 너무 낮습니다. <br />
            좋은 해상도로 다시 업로드 부탁드려요!
          </p>
        )}
      </section>
    </section>
  );
}
