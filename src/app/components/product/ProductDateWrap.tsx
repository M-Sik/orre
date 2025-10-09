"use client";

import { Product } from "@/types";
import React from "react";
import styles from "./productDateWrap.module.scss";
import ProductItem from "./ProductItem";

type Props = {
  date: string;
  state: string;
  product: Product;
};

export default function ProductDateWrap({ date, state, product }: Props) {
  return (
    <div className={styles["product-date-wrap"]}>
      <p className={styles["date-text"]}>
        {date}
        <span className={`${state === "미승인" ? styles["gray"] : ""}`}>{state}</span>
      </p>
      <ProductItem product={product} />
    </div>
  );
}
