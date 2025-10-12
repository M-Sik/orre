"use client";

import React from "react";
import styles from "./section2.module.scss";
import Section2Bg from "../_image/section2-image.png";
import Section2Btn from "../_image/section2-btn.png";
import { useRouter } from "next/navigation";

export default function Section2() {
  const router = useRouter();
  return (
    <section className={styles["section2"]}>
      <div>
        <img src={Section2Bg.src} alt="section2" />
      </div>
      <div>
        <img
          src={Section2Btn.src}
          alt="section2"
          className={styles["section2-btn"]}
          onClick={() => router.push("/sell/register/step1")}
        />
      </div>
    </section>
  );
}
