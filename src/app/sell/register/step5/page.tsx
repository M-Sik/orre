"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import StepIcon from "@/app/assets/icons/StepIcon";
import PriceSlider from "./_component/PriceSlider";
import { useRouter } from "next/navigation";

export default function Step5Page() {
  const [strPrice, setStrPrice] = useState("");
  const router = useRouter();
  return (
    <section className={styles["sell-register-step5-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p>함량 선택</p>
        <StepIcon />
        <p>주얼리 정보</p>
        <StepIcon />
        <p className={styles["active-step"]}>사진 등록</p>
      </div>
      <p className={styles["title"]}>
        마지막 단계! <br />
        예상 판매가격을 입력해 주세요.
      </p>
      <p className={styles["sub-title"]}>
        주얼리 실제 구입 가격과 상태에 따라 <br />
        팔고 싶은 가격대를 입력해 주세요.
      </p>
      <div style={{ marginTop: "90px" }}>
        <PriceSlider setStrPrice={setStrPrice} />
      </div>
      <div className={styles["price-wrap"]}>
        <p>판매가격</p>
        <div>{strPrice}</div>
      </div>
      <button className={styles["register-button"]} onClick={() => router.push("/sell/register/step6")}>
        등록 완료
      </button>
    </section>
  );
}
