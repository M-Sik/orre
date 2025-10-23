"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import ProductItem from "@/app/components/product/ProductItem";
// brand image
import TipanyImage from "./_image/tipany.png";
import CartierImage from "./_image/cartier.png";
import DiorImage from "./_image/dior.png";
import BvlgariImage from "./_image/bvlgari.png";
import HermesImage from "./_image/hermes.png";
// list item image
import ListItem1 from "./_image/list-item1.png";
import ListItem2 from "./_image/list-item2.png";
import ListItem3 from "./_image/list-item3.png";
import ListItem4 from "./_image/list-item4.png";
import ListItem5 from "./_image/list-item5.png";
import ListItem6 from "./_image/list-item6.png";

const products = [
  {
    brandImg: TipanyImage.src,
    productImg: ListItem1.src,
    productName: `티파니 노트 이어링 다이아 세팅\n골드 18K`,
    productPrice: "1,800,000원",
    content: `보증서 보유Q \nA등급, 실착용 횟수 20회 이내`,
    viewCount: "120",
    isLike: false,
  },
  {
    brandImg: HermesImage.src,
    productImg: ListItem2.src,
    productName: `에르메스 팝아슈 미니 골드\n골드 18K`,
    productPrice: "1,750,000원",
    content: `보증서 보유`,
    viewCount: "112",
    isLike: false,
  },
  {
    brandImg: CartierImage.src,
    productImg: ListItem3.src,
    productName: `까르띠에 클래쉬드 스몰\n골드 18K`,
    productPrice: "1,500,000원",
    content: `보증서 보유, 더스트백 보유`,
    viewCount: "100",
    isLike: false,
  },
  {
    brandImg: DiorImage.src,
    productImg: ListItem4.src,
    productName: `petit CD 귀걸이\n골드 18K`,
    productPrice: "1,200,000원",
    content: `구성품 없음, B등급`,
    viewCount: "108",
    isLike: false,
  },
  {
    brandImg: BvlgariImage.src,
    productImg: ListItem5.src,
    productName: `불가리 싱글 이어링 블랙\n골드 18K`,
    productPrice: "8,200,000원",
    content: `보증서, 박스 보유Q \nA등급, 실착용 횟수 10회 이내`,
    viewCount: "180",
    isLike: false,
  },
  {
    brandImg: CartierImage.src,
    productImg: ListItem6.src,
    productName: `까르띠에 트리니팅\n골드 18K`,
    productPrice: "6,000,000원",
    content: `보증서, 더스트백 보유Q \nA등급, 흠집 없음`,
    viewCount: "120",
    isLike: false,
  },
];

export default function SearchListPage() {
  const [list, setList] = useState(products);

  return (
    <section className={styles["jewelry-search-list-page"]}>
      <div className={styles["list-wrap"]}>
        {list.map((item, idx) => (
          <ProductItem key={item.productName} product={item} />
        ))}
      </div>
    </section>
  );
}
