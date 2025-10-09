"use client";

import styles from "./page.module.scss";
import TipanyImage from "./_image/tipany.png";
import TipanyProductImage from "./_image/tipanyProductImage.png";
import TipanyProductImage2 from "./_image/tipanyProductImage2.png";
import TipanyProductImage3 from "./_image/tipanyProductImage3.png";
import { useState } from "react";
import { Product } from "@/types";
import ProductDateWrap from "@/app/components/product/ProductDateWrap";

const sellings = [
  {
    date: "2025.10.28",
    state: "배송중",
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
    date: "2025.10.28",
    state: "배송중",
    product: {
      brandImg: TipanyImage.src,
      productImg: TipanyProductImage2.src,
      productName: `티파니T 스마일 미니 이어링\n골드 18K`,
      productPrice: "1,500,000원",
      content: `보증서, 더스크백 보유 \nC등급`,
      viewCount: "215",
      isLike: null,
    },
  },
  {
    date: "2025.11.01",
    state: "배송완료",
    product: {
      brandImg: TipanyImage.src,
      productImg: TipanyProductImage3.src,
      productName: `티파니 하드웨어\n골드 18K`,
      productPrice: "1,200,000원",
      content: `구성품 없음 \nC등급`,
      viewCount: "314",
      isLike: null,
    },
  },
];

export default function MypageBuyPage() {
  const [sells, setSells] = useState<{ date: string; state: string; product: Product }[]>(sellings);

  return (
    <section className={styles["mypage-buy-page"]}>
      <p className={styles["title"]}>상품구입 내역</p>
      <div className={styles["list-wrap"]}>
        {sells.map((item, idx) => (
          <ProductDateWrap key={idx} date={item.date} state={item.state} product={item.product} />
        ))}
      </div>
    </section>
  );
}
