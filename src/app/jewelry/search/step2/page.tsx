"use client";

import React, { Suspense, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import StepIcon from "@/app/assets/icons/StepIcon";
import PriceSlider from "./_component/PriceSlider";

function Step2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log("category => ", category);
  const [strPrice, setStrPrice] = useState("");

  return (
    <section className={styles["jewelry-search-step2-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p className={styles["active-step"]}>가격대</p>
        <StepIcon />
        <p>함량 및 중량</p>
        <StepIcon />
        <p>주얼리 정보</p>
      </div>
      <p className={styles["title"]}>
        구매를 원하시는 <br />
        주얼리의 가격대를 선택해 주세요.
      </p>
      <p className={styles["sub-title"]}>구입을 원하는 가격대를 선택해 주세요.</p>
      <div className={styles["price-slider-wrap"]}>
        <PriceSlider setStrPrice={setStrPrice} />
      </div>
      <button
        className={styles["register-button"]}
        onClick={() => router.push(`/jewelry/search/step3?category=${category}&price=${strPrice}`)}
      >
        등록 완료
      </button>
    </section>
  );
}

export default function Step2Page() {
  return (
    <Suspense>
      <Step2Content />
    </Suspense>
  );
}
