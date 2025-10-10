"use client";

import styles from "./section2.module.scss";
import Section2Bg from "../../_image/section2-image.png";
import Section2Btn from "../../_image/section2-btn.png";
import { useRouter } from "next/navigation";

export default function Section2() {
  const router = useRouter();
  return (
    <section className={styles["section2"]}>
      <img src={Section2Bg.src} alt="section2" />
      <img
        src={Section2Btn.src}
        alt="section2"
        className={styles["section2-btn"]}
        style={{ marginTop: "44px", cursor: "pointer" }}
        onClick={() => router.push("/jewelry")}
      />
    </section>
  );
}
