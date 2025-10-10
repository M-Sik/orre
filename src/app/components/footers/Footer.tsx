"use client";

import React from "react";
import styles from "./footer.module.scss";
import LogoIcon from "@/app/assets/images/footers/logo.png";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <img src={LogoIcon.src} alt="로고" className={styles["logo-icon"]} />
      <div style={{ display: "flex", gap: "16px" }}>
        <p>대표 : 김소원</p>
        <p>주소 : 전북특별자치도 익산시 동서로 370, 5층 505-6호</p>
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
        <p>사업자등록번호 : 765-11-03115</p>
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
        <p>이메일 : sw.kim@atelierfine.co.kr</p>
      </div>
      <p style={{ fontSize: "13px", color: "#7b7b7b", marginTop: "22px" }}>
        Copyright 2025. orre inc. all rights reserved.
      </p>
    </footer>
  );
}
