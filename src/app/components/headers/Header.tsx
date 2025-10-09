"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";

import LineIcon from "@/app/assets/images/headers/3line.png";
import LogoIcon from "@/app/assets/images/headers/logo.png";
import MartIcon from "@/app/assets/images/headers/mart.png";
import AccountIcon from "@/app/assets/images/headers/account.png";
import SideBar from "../sidebar/SideBar";

export default function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles["three-line-icon-container"]}>
        <img
          src={LineIcon.src}
          alt="햄버거 아이콘"
          className={styles["three-line-icon"]}
          onClick={() => {
            setIsSideBarOpen(true);
          }}
        />
      </div>
      <img src={LogoIcon.src} alt="로고" className={styles["logo-icon"]} />
      <div>
        <img src={MartIcon.src} alt="마트" className={styles["mart-icon"]} />
        <img src={AccountIcon.src} alt="계정" className={styles["account-icon"]} />
      </div>
      <SideBar closeSideBar={() => setIsSideBarOpen(false)} isSideBarOpen={isSideBarOpen} />
    </header>
  );
}
