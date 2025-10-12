"use client";

import React, { Suspense, useState } from "react";
import styles from "./page.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import StepIcon from "@/app/assets/icons/StepIcon";

import Gold14KImg from "./_image/14k.png";
import Gold18KImg from "./_image/18k.png";
import Gold24KImg from "./_image/24k.png";
import EtcImg from "./_image/etc.png";

function Step3Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");

  const [selectGold, setSelectGold] = useState<string>("14K");
  const [goldWeight, setGoldWeight] = useState<string>("");

  const handleBtnClick = () => {
    const params = `category=${category}&price=${price}&gold=${selectGold} ${goldWeight}`;

    router.push(`/jewelry/search/step4?${params}`);
  };

  return (
    <section className={styles["jewelry-search-step3-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p>가격대</p>
        <StepIcon />
        <p className={styles["active-step"]}>함량 및 중량</p>
        <StepIcon />
        <p>주얼리 정보</p>
      </div>
      <p className={styles["title"]}>금 함량을 알려주세요.</p>
      <p className={styles["sub-title"]}>
        금이 아닌 귀금속 및 광물 주얼리는
        <br />
        기타를 선택해 주세요.
      </p>
      <div className={styles["gold-wrap"]} style={{ marginTop: "30px" }}>
        <img
          src={Gold14KImg.src}
          alt="14k"
          className={`${selectGold === "14K" ? styles["active"] : ""}`}
          onClick={() => setSelectGold("14K")}
        />
        <img
          src={Gold18KImg.src}
          alt="18k"
          className={`${selectGold === "18K" ? styles["active"] : ""}`}
          onClick={() => setSelectGold("18K")}
        />
      </div>
      <div className={styles["gold-wrap"]}>
        <img
          src={Gold24KImg.src}
          alt="24k"
          className={`${selectGold === "24K" ? styles["active"] : ""}`}
          onClick={() => setSelectGold("24K")}
        />
        <img
          src={EtcImg.src}
          alt="etc"
          className={`${selectGold === "기타" ? styles["active"] : ""}`}
          onClick={() => setSelectGold("기타")}
        />
      </div>
      <div className={styles["gold-weight-wrap"]}>
        <p>
          {selectGold === "기타" ? "기타 귀금속 및 광물" : "금 함량"} <span>*선택</span>
        </p>
        <input
          type="text"
          value={goldWeight}
          onChange={(e) => setGoldWeight(e.target.value)}
          placeholder="함량을 입력해 주세요."
        />
      </div>
      <button className={styles["select-button"]} onClick={() => handleBtnClick()}>
        선택 완료
      </button>
    </section>
  );
}

export default function Step3Page() {
  return (
    <Suspense>
      <Step3Content />
    </Suspense>
  );
}
