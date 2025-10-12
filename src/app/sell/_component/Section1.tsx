"use client";

import styles from "./section1.module.scss";
import React from "react";

import Section1Bg from "../_image/section1-bg.png";
import { useRouter } from "next/navigation";

export default function Section1() {
  const router = useRouter();
  return (
    <section className={styles["section1"]}>
      <img src={Section1Bg.src} alt="" />
      <div className={styles["text-wrap"]}>
        <h1 className={styles["title"]}>
          가장 안전한 <br />금 주얼리 중고거래
        </h1>
        <p className={styles["content"]}>
          각종 사기가 넘쳐나는 현물 사기, <br />
          오레에서 안전하고 가치있게 거래해 보세요.
        </p>
        <p className={styles["open-event"]}>OPEN ENENT</p>
      </div>
      <div className={styles["tab-wrap"]}>
        <button
          type="button"
          className={`${styles["active-tab"]} ${styles["no-active-tab"]}`}
          onClick={() => router.push("/buy")}
        >
          사고 싶어요
        </button>
        <button type="button" className={`${styles["active-tab"]}`}>
          팔고 싶어요
        </button>
      </div>
    </section>
  );
}
