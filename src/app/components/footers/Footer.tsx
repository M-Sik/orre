"use client";

import React from "react";
import styles from "./footer.module.scss";
import LogoIcon from "@/app/assets/images/footers/logo.png";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <img src={LogoIcon.src} alt="로고" className={styles["logo-icon"]} />
      <div style={{ display: "flex", gap: "16px" }}>
        <p>대표 : 홍길동</p>
        <p>주소 : 주소가 들어갈 영역</p>
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
        <p>사업자등록번호 : 0000-00-0000</p>
        <p>대표전화 : 0000-0000</p>
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
        <p>이메일 : ABC_123@gmail.com</p>
      </div>
      <p style={{ fontSize: "13px", color: "#7b7b7b", marginTop: "22px" }}>
        Copyright 2025. 회사이름 inc. all rights reserved.
      </p>
    </footer>
  );
}
