"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import TipanyImage from "./_image/tipany.png";
import CartierImage from "./_image/cartier.png";
import DiorImage from "./_image/dior.png";
import TipanyProductImage from "./_image/tipanyProductImage.png";
import CartierProductImage from "./_image/cartierProductImage.png";
import DiorProductImage from "./_image/diorProductImage.png";
import { Product } from "@/types";
import ProductDateWrap from "@/app/components/product/ProductDateWrap";

const sellings = [
  {
    date: "2025.11.02",
    state: "승인완료",
    product: {
      brandImg: TipanyImage.src,
      productImg: TipanyProductImage.src,
      productName: `티파니앤코 리턴 투 하트 태그\n골드 18K`,
      productPrice: "1,750,000원",
      content: `보증서 보유\nA등급, 실착용 횟수 20회 이내`,
      viewCount: "112",
      isLike: null,
    },
  },
  {
    date: "2025.11.01",
    state: "미승인",
    product: {
      brandImg: TipanyImage.src,
      productImg: TipanyProductImage.src,
      productName: `티파니앤코 리턴 투 하트 태그\n골드 18K`,
      productPrice: "1,750,000원",
      content: `보증서 보유\nA등급, 실착용 횟수 5회 이내`,
      viewCount: "0",
      isLike: null,
    },
  },
];

const sellCompleted = [
  {
    date: "2025.10.28",
    state: "판매완료",
    product: {
      brandImg: CartierImage.src,
      productImg: CartierProductImage.src,
      productName: `까르띠에 크래쉬드 스몰\n골드 18K`,
      productPrice: "1,500,000원",
      content: `보증서 보유\n더스트백 보유`,
      viewCount: "88",
      isLike: null,
    },
  },
  {
    date: "2025.10.29",
    state: "판매완료",
    product: {
      brandImg: DiorImage.src,
      productImg: DiorProductImage.src,
      productName: `petit CD 귀걸이\n골드 18K`,
      productPrice: "1,200,000원",
      content: `구성품 없음\nB등급`,
      viewCount: "34",
      isLike: null,
    },
  },
];

export default function MypageSellPage() {
  const [tap, setTap] = useState<number>(1);
  const [sells, setSells] = useState<{ date: string; state: string; product: Product }[]>(sellings);

  return (
    <section className={styles["mypage-sell-page"]}>
      <p className={styles["title"]}>상품판매 내역</p>
      <div className={styles["tap-wrap"]}>
        <p
          className={`${styles["tap"]} ${tap === 1 ? styles["active"] : ""}`}
          onClick={() => {
            setTap(1);
            setSells(sellings);
          }}
        >
          판매 중 1
        </p>
        <p
          className={`${styles["tap"]} ${tap === 2 ? styles["active"] : ""}`}
          onClick={() => {
            setTap(2);
            setSells(sellCompleted);
          }}
        >
          판매 완료 2
        </p>
      </div>
      <div className={styles["sell-wrap"]}>
        {sells.map((item, idx) => (
          <ProductDateWrap key={idx} date={item.date} state={item.state} product={item.product} />
        ))}
      </div>
    </section>
  );
}
