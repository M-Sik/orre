"use client";

import useLikeProductStore from "@/store/likeProductStore";
import styles from "./page.module.scss";
import ProductItem from "@/app/components/product/ProductItem";

export default function MypageLikePage() {
  const likeProducts = useLikeProductStore((state) => state.likeProducts);

  return (
    <section className={styles["my-page-like-page"]}>
      <p className={styles["title"]}>좋아요</p>
      <div className={styles["list-wrap"]}>
        {likeProducts.map((item, idx) => (
          <ProductItem key={idx} product={item} />
        ))}
      </div>
    </section>
  );
}
