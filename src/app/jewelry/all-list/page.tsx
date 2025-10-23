"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import styles from "./page.module.scss";
import TopImage from "../_image/jewelry-main-top-image.png";

import ListItem1 from "./_image/list-item-1.png";
import ListItem2 from "./_image/list-item-2.png";
import ListItem3 from "./_image/list-item-3.png";
import ListItem4 from "./_image/list-item-4.png";
import ListItem5 from "./_image/list-item-5.png";
import ListItem6 from "./_image/list-item-6.png";
import ListItem7 from "./_image/list-item-7.png";
import ListItem8 from "./_image/list-item-8.png";
import ProductBigImageItem from "@/app/components/product/ProductBigImageItem";

import DiffCategoryBtnImage from "./_image/diff-category-btn.png";

const list = [
  {
    brandImg: null,
    productImg: ListItem1.src,
    productName: `Basic gold earrings`,
    productPrice: "170,000원",
    content: `보증서 보유, \nB등급, 실착용 횟수 20회 이내`,
    viewCount: "32",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: ListItem2.src,
    productName: `Peridot earrings`,
    productPrice: "180,000원",
    content: `보증서, 박스 보유,  \nA등급, 실착용 횟수 10회 이내`,
    viewCount: "215",
    isLike: false,
    tag: "BEST",
  },
  {
    brandImg: null,
    productImg: ListItem3.src,
    productName: `Sapphire silver earrings`,
    productPrice: "540,000원",
    content: `보증서 보유, \nA등급`,
    viewCount: "215",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: ListItem4.src,
    productName: `A unique silver ring`,
    productPrice: "270,000원",
    content: `보증서, 박스 보유,  \nA등급, 실착용 횟수 8회 이내`,
    viewCount: "215",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: ListItem5.src,
    productName: `Heart earrings`,
    productPrice: "350,000원",
    content: `보증서 보유, \nB등급, 실착용 횟수 10회 이내`,
    viewCount: "32",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: ListItem6.src,
    productName: `curved circular earrings`,
    productPrice: "220,000원",
    content: `보증서, 박스 보유,  \nA등급, 실착용 횟수 5회 이내`,
    viewCount: "77",
    isLike: false,
    tag: "NEW",
  },
  {
    brandImg: null,
    productImg: ListItem7.src,
    productName: `Signature shiny earrings`,
    productPrice: "270,000원",
    content: `보증서, 박스 보유,  \nB등급, 실착용 횟수 20회 이내`,
    viewCount: "132",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: ListItem8.src,
    productName: `Layer chain gold earring`,
    productPrice: "180,000원",
    content: `보증서 보유, \nA등급, 실착용 횟수 20회 이내`,
    viewCount: "132",
    isLike: false,
  },
];

function AllListContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log("category => ", category);
  const router = useRouter();
  return (
    <section className={styles["all-list-page"]}>
      <div style={{ display: "flex" }}>
        <img src={TopImage.src} alt="top-image" className={styles["top-image"]} />
      </div>
      <div className={styles["title-wrap"]}>
        <div className={styles["divider"]}></div>
        <p className={styles["section-title"]}>{category}</p>
      </div>
      {category === "EARRINGS" || category === "NEW ITEM" || category === "DAILY ITEM" ? (
        <div className={styles["list-wrap"]}>
          {list.map((item, idx) => (
            <ProductBigImageItem product={item} key={idx} />
          ))}
        </div>
      ) : (
        <div className={styles["empty-wrap"]}>상품 준비중입니다.</div>
      )}
      <div className={styles["diff-category-btn-wrap"]}>
        <img
          src={DiffCategoryBtnImage.src}
          alt="diff-category-btn"
          onClick={() => router.push("/jewelry/search/step1")}
        />
      </div>
    </section>
  );
}

export default function AllList() {
  return (
    <Suspense>
      <AllListContent />
    </Suspense>
  );
}
