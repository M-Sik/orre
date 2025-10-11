"use client";

import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import styles from "./productItem.module.scss";
import { useRouter } from "next/navigation";
import HeartFillIcon from "@/app/assets/icons/HeartFillIcon";
import HeartNotFillIcon from "@/app/assets/icons/HeartNotFillIcon";
import useLikeProductStore from "@/store/likeProductStore";
import Modal from "../modals/Modal";

type Props = {
  product: Product;
  date?: string;
  state?: string;
};

export default function ProductItem({ product, date = "", state = "" }: Props) {
  const { deleteLike, addLike } = useLikeProductStore();
  const likeProducts = useLikeProductStore((state) => state.likeProducts);
  console.log("zzz => ", product.brandImg);
  const router = useRouter();

  const [isLikeState, setIsLikeState] = useState<boolean | null>(product.isLike);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  useEffect(() => {
    console.log("여기?0", product.productName);
    console.log(likeProducts);
    if (
      likeProducts.some((item) => item.productName.replaceAll("\n", "") === product.productName.replaceAll("\n", ""))
    ) {
      console.log(
        likeProducts.some((item) => item.productName.replaceAll("\n", "") === product.productName.replaceAll("\n", ""))
      );
      console.log("여기?1");
      setIsLikeState(true);
    } else {
      console.log("여기?2");
      setIsLikeState(false);
    }
  }, []);
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
      {product.isLike != null && isLikeState === true && (
        <div
          className={styles["heart-icon"]}
          onClick={(e) => {
            e.stopPropagation();
            deleteLike(product.productName);
            setIsLikeState(false);
          }}
        >
          <HeartFillIcon />
        </div>
      )}
      {product.isLike != null && isLikeState === false && (
        <div
          className={styles["heart-icon"]}
          onClick={(e) => {
            e.stopPropagation();
            addLike(product);
            setIsLikeState(true);
            setIsLikeOpen(true);
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
      <Modal
        isOpen={isLikeOpen}
        onClose={() => setIsLikeOpen(false)}
        contentText={`좋아요가 완료되었습니다.`}
        btnText="좋아요 내역 보기"
        btnClick={() => router.push("/my-page/like")}
      />
    </div>
  );
}
