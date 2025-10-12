"use client";

import React from "react";
import styles from "./section3.module.scss";
import Section3Bg from "../_image/section3-image.png";
import Section3Btn from "../_image/section2-btn.png";
import { useRouter } from "next/navigation";

export default function Section3() {
  const router = useRouter();

  return (
    <section className={styles["section3"]}>
      <img src={Section3Bg.src} alt="section3" />
      <div>
        <img
          src={Section3Btn.src}
          alt="section3"
          className={styles["section3-btn"]}
          onClick={() => router.push("/sell/register/step1")}
        />
      </div>
    </section>
  );
}
