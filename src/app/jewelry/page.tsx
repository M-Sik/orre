"use client";

import React from "react";
import styles from "./page.module.scss";
import TopImage from "./_image/jewelry-main-top-image.png";
import SearchBtn from "./_image/search-btn.png";
import { useRouter } from "next/navigation";

import MoreBtnImage from "./_image/more-btn.png";
// 카테고리
import CategoryEardropImg from "./_image/category-eardrop.png";
import CategoryNecklaceImg from "./_image/category-necklace.png";
import CategoryRingImg from "./_image/category-ring.png";
import CategoryPendantImg from "./_image/category-pendant.png";
import CategoryBangleImg from "./_image/category-bangle.png";
import CategoryBraceletImg from "./_image/category-bracelet.png";
import CategoryBroochImg from "./_image/category-brooch.png";
import CategoryTiaraImg from "./_image/category-tiara.png";
import CategoryEtcImg from "./_image/category-etc.png";
//Newitem
import NewItem1 from "./_image/new-item-1.png";
import NewItem2 from "./_image/new-item-2.png";
import NewItem3 from "./_image/new-item-3.png";
import NewItem4 from "./_image/new-item-4.png";
import ProductBigImageItem from "../components/product/ProductBigImageItem";
//Dailyitem
import DailyItem1 from "./_image/daily-item-1.png";
import DailyItem2 from "./_image/daily-item-2.png";
import DailyItem3 from "./_image/daily-item-3.png";
import DailyItem4 from "./_image/daily-item-4.png";

const categorys = [
  { imgSrc: CategoryEardropImg.src, title: "귀걸이", EnTitle: "EARRINGS" },
  { imgSrc: CategoryNecklaceImg.src, title: "목걸이", EnTitle: "NECKLACES" },
  { imgSrc: CategoryRingImg.src, title: "반지", EnTitle: "RINGS" },
  { imgSrc: CategoryPendantImg.src, title: "펜던트", EnTitle: "PENDANTS" },
  { imgSrc: CategoryBangleImg.src, title: "뱅글", EnTitle: "BANGLES" },
  { imgSrc: CategoryBraceletImg.src, title: "팔찌", EnTitle: "BRACELETS" },
  { imgSrc: CategoryBroochImg.src, title: "브로치", EnTitle: "BROOCHS" },
  { imgSrc: CategoryTiaraImg.src, title: "티아라", EnTitle: "TIAERAS" },
  { imgSrc: CategoryEtcImg.src, title: "기타", EnTitle: "ETC" },
];

const newItems = [
  {
    brandImg: null,
    productImg: NewItem1.src,
    productName: `flexible cross ring`,
    productPrice: "180,000원",
    content: `보증서 보유 \nB등급, 실착용 횟수 20회 이내`,
    viewCount: "32",
    isLike: false,
    tag: "BEST",
  },
  {
    brandImg: null,
    productImg: NewItem2.src,
    productName: `Peridot earrings`,
    productPrice: "350,000원",
    content: `보증서, 박스 보유  \nA등급, 실착용 횟수 10회 이내`,
    viewCount: "215",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: NewItem3.src,
    productName: `Sapphire stone necklace`,
    productPrice: "540,000원",
    content: `보증서`,
    viewCount: "215",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: NewItem4.src,
    productName: `Signature shiny earrings`,
    productPrice: "270,000원",
    content: `보증서, 박스 보유  \nA등급, 실착용 횟수 8회 이내`,
    viewCount: "215",
    isLike: false,
    tag: "NEW",
  },
];

const dailyItems = [
  {
    brandImg: null,
    productImg: DailyItem1.src,
    productName: `Basic gold earrings`,
    productPrice: "170,000원",
    content: `보증서 보유 \nB등급, 실착용 횟수 20회 이내`,
    viewCount: "32",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: DailyItem2.src,
    productName: `Peridot earrings`,
    productPrice: "180,000원",
    content: `보증서, 박스 보유  \nA등급, 실착용 횟수 10회 이내`,
    viewCount: "215",
    isLike: false,
    tag: "BEST",
  },
  {
    brandImg: null,
    productImg: DailyItem3.src,
    productName: `Sapphire silver earrings`,
    productPrice: "540,000원",
    content: `보증서 \nA등급`,
    viewCount: "215",
    isLike: false,
  },
  {
    brandImg: null,
    productImg: DailyItem4.src,
    productName: `A unique silver ring`,
    productPrice: "270,000원",
    content: `보증서, 박스 보유  \nA등급, 실착용 횟수 8회 이내`,
    viewCount: "215",
    isLike: false,
  },
];

export default function JewelryPage() {
  const router = useRouter();

  return (
    <section className={styles["jewelry-page"]}>
      <div style={{ display: "flex" }}>
        <img src={TopImage.src} alt="top-image" className={styles["top-image"]} />
      </div>
      <section style={{ padding: "0 20px" }}>
        <p style={{ fontSize: "24px", fontWeight: "500", color: "#222222", textAlign: "center", marginTop: "69px" }}>
          원하는 주얼리 검색
        </p>
        <p style={{ fontSize: "14px", color: "#171717", marginTop: "18px", textAlign: "center" }}>
          세부 조건으로 원하는 주얼리를 찾을 수 있습니다.
        </p>
        <div
          style={{ display: "flex", marginTop: "18px", marginBottom: "64px", cursor: "pointer" }}
          onClick={() => router.push("/jewelry/search/step1")}
        >
          <img src={SearchBtn.src} alt="search-btn" style={{ width: "100%" }} />
        </div>
        <section className={styles["section-wrap"]}>
          <div className={styles["divider"]}></div>
          <p className={styles["section-title"]}>Category</p>
          <div className={styles["category-wrap"]}>
            {categorys.map((item, idx) => (
              <div key={idx} style={{ display: "flex" }}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  onClick={() => router.push(`/jewelry/all-list?category=${item.EnTitle}`)}
                />
              </div>
            ))}
          </div>
        </section>
        <section className={styles["section-wrap"]}>
          <div className={styles["divider"]}></div>
          <p className={styles["section-title"]}>NEW ITEM</p>
          <div className={styles["new-item-wrap"]}>
            {newItems.map((item, idx) => (
              <ProductBigImageItem key={idx} product={item} />
            ))}
          </div>
          <div className={styles["more-btn-wrap"]}>
            <img
              src={MoreBtnImage.src}
              alt="more-btn"
              onClick={() => router.push("/jewelry/all-list?category=NEW ITEM")}
            />
          </div>
        </section>
        <section className={styles["section-wrap"]}>
          <div className={styles["divider"]}></div>
          <p className={styles["section-title"]}>DAILY ITEM</p>
          <div className={styles["new-item-wrap"]}>
            {dailyItems.map((item, idx) => (
              <ProductBigImageItem key={idx} product={item} />
            ))}
          </div>
          <div className={styles["more-btn-wrap"]} style={{ marginBottom: "86px" }}>
            <img
              src={MoreBtnImage.src}
              alt="more-btn"
              onClick={() => router.push("/jewelry/all-list?category=DAILY ITEM")}
            />
          </div>
        </section>
      </section>
    </section>
  );
}
