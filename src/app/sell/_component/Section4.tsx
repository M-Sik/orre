"use client";

import React from "react";
import styles from "./section4.module.scss";
import Section4Bg from "../_image/section4-image.png";
import Section4Btn from "../_image/section2-btn.png";
import { useRouter } from "next/navigation";

export default function Section4() {
  const router = useRouter();
  return (
    <section className={styles["section4"]}>
      <div>
        <img src={Section4Bg.src} alt="section4" />
      </div>
      <div className={styles["section4-btn-wrap"]}>
        <img
          src={Section4Btn.src}
          alt="section4"
          className={styles["section4-btn"]}
          onClick={() => router.push("/sell/register/step1")}
        />
      </div>
    </section>
  );
}
