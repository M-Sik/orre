"use client";

import React from "react";
import styles from "./section3.module.scss";

import Section3Image from "../../_image/section3-image.png";
import Section3Btn from "../../_image/section2-btn.png";
import { useRouter } from "next/navigation";

export default function Section3() {
  const router = useRouter();
  return (
    <section className={styles["section3"]}>
      <img src={Section3Image.src} alt="section3" />
      <div className={styles["btn-wrap"]} onClick={() => router.push("/jewelry")}>
        <img src={Section3Btn.src} alt="section3" />
      </div>
    </section>
  );
}
