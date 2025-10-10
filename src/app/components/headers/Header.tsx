"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";

import LineIcon from "@/app/assets/images/headers/3line.png";
import LogoIcon from "@/app/assets/images/headers/logo.png";
import MartIcon from "@/app/assets/images/headers/mart.png";
import AccountIcon from "@/app/assets/images/headers/account.png";
import SideBar from "../sidebar/SideBar";
import { useRouter } from "next/navigation";
import useCartProductStore from "@/store/cartProductStore";

export default function Header() {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const cartProducts = useCartProductStore((state) => state.cartProducts);
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", position: "relative" }}>
          {cartProducts.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "-4px",
                right: "-10px",
                backgroundColor: "#FFA52A",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "white",
              }}
            >
              {cartProducts.length}
            </div>
          )}
          <img
            src={MartIcon.src}
            alt="마트"
            className={styles["mart-icon"]}
            onClick={() => router.push("/my-page/cart")}
          />
        </div>
        <img
          src={AccountIcon.src}
          alt="계정"
          className={styles["account-icon"]}
          onClick={() => router.push("/my-page")}
        />
      </div>
      <SideBar closeSideBar={() => setIsSideBarOpen(false)} isSideBarOpen={isSideBarOpen} />
    </header>
  );
}
