"use client";

import React from "react";
import styles from "./page.module.scss";
import CheckIcon from "./CheckIcon";
import { useRouter } from "next/navigation";

export default function Step6Page() {
  const router = useRouter();
  return (
    <section className={styles["sell-register-step6-page"]}>
      <div className={styles["check-icon-wrap"]}>
        <CheckIcon />
      </div>
      <p className={styles["title"]}>등록이 완료되었습니다!</p>
      <button className={styles["check-button"]} onClick={() => router.push("/my-page/sell")}>
        마이페이지에서 확인하기
      </button>
    </section>
  );
}
