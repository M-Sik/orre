"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import StepIcon from "@/app/assets/icons/StepIcon";
import { useRouter } from "next/navigation";

import CategoryEardropImg from "../../_image/category-eardrop.png";
import CategoryNecklaceImg from "../../_image/category-necklace.png";
import CategoryRingImg from "../../_image/category-ring.png";
import CategoryPendantImg from "../../_image/category-pendant.png";
import CategoryBangleImg from "../../_image/category-bangle.png";
import CategoryBraceletImg from "../../_image/category-bracelet.png";
import CategoryBroochImg from "../../_image/category-brooch.png";
import CategoryTiaraImg from "../../_image/category-tiara.png";
import CategoryEtcImg from "../../_image/category-etc.png";

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

export default function Step1Page() {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState<string>("귀걸이");

  return (
    <section className={styles["jewelry-search-step1-page"]}>
      <div className={styles["step-wrap"]}>
        <p className={styles["active-step"]}>카테고리 선택</p>
        <StepIcon />
        <p>가격대</p>
        <StepIcon />
        <p>함량 및 중량</p>
        <StepIcon />
        <p>주얼리 정보</p>
      </div>
      <p className={styles["title"]}>
        어떤 품목을 <br />
        구매하고 싶으신가요?
      </p>
      <p className={styles["sub-title"]}>원하시는 품목이 없으시면 기타를 선택해 주세요!</p>
      <div className={styles["category-wrap"]}>
        {categorys.map((item, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <img
              src={item.imgSrc}
              alt={item.title}
              onClick={() => setSelectCategory(item.title)}
              className={`${selectCategory === item.title ? styles["active"] : ""}`}
            />
          </div>
        ))}
      </div>
      <button
        className={`${styles["select-button"]} ${selectCategory ? styles["active"] : ""}`}
        onClick={() => router.push(`/jewelry/search/step2?category=${selectCategory}`)}
      >
        선택 완료
      </button>
    </section>
  );
}
