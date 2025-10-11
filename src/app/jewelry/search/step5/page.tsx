"use client";

import React, { Suspense } from "react";
import styles from "./page.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import StepIcon from "@/app/assets/icons/StepIcon";

function Step5Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const gold = searchParams.get("gold");
  const productName = searchParams.get("productName");
  const brand = searchParams.get("brand");

  console.log("category => ", category);
  console.log("price => ", price);
  console.log("gold => ", gold);
  console.log("productName => ", productName);
  console.log("brand => ", brand);

  return (
    <section className={styles["jewelry-search-step5-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p>가격대</p>
        <StepIcon />
        <p>함량 및 중량</p>
        <StepIcon />
        <p className={styles["active-step"]}>주얼리 정보</p>
      </div>
      <p className={styles["title"]}>이렇게 검색할까요?</p>
      <p className={styles["sub-title"]}>선택한 항목의 내용을 확인해주세요.</p>
      <div className={styles["info-wrap"]}>
        <div className={styles["info-item"]}>
          <p>카테고리</p>
          <div>{category}</div>
        </div>
        <div className={styles["info-item"]}>
          <p>주얼리 가격대</p>
          <div>{price}</div>
        </div>
        <div className={styles["info-item"]}>
          <p>주얼리 상품명</p>
          <div>{productName ? productName : "전체"}</div>
        </div>
        <div className={styles["info-item"]}>
          <p>주얼리 브랜드</p>
          <div>{brand}</div>
        </div>
        <div className={styles["info-item"]}>
          <p>금 함량 및 중량</p>
          <div>{gold}</div>
        </div>
      </div>
      <button className={styles["search-button"]} onClick={() => router.push("/jewelry/search/list")}>
        주얼리 보러 가기
      </button>
    </section>
  );
}

export default function Step5Page() {
  return (
    <Suspense>
      <Step5Content />
    </Suspense>
  );
}
