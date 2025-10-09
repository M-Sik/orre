"use client";

import React from "react";
import styles from "./sidebar.module.scss";
import CloseIcon from "./closeIcon.png";
import { useRouter } from "next/navigation";

type Props = {
  isSideBarOpen: boolean;
  closeSideBar: () => void;
};
export default function SideBar({ isSideBarOpen, closeSideBar }: Props) {
  const router = useRouter();
  return (
    <>
      {isSideBarOpen && (
        <section className={styles["sidebar"]}>
          <div className={styles["sidebar-content"]}>
            <div className={styles["sidebar-header"]}>
              <img src={CloseIcon.src} alt="닫기" onClick={closeSideBar} className={styles["close-icon"]} />
            </div>
            <div className={styles["menu-wrap"]}>
              <p
                onClick={() => {
                  router.push("/");
                  closeSideBar();
                }}
              >
                금시세(홈)
              </p>
              <p
                onClick={() => {
                  router.push("/my-page/sell");
                  closeSideBar();
                }}
              >
                상품판매
              </p>
              <p
                onClick={() => {
                  router.push("/my-page/buy");
                  closeSideBar();
                }}
              >
                상품구입
              </p>
              <p
                onClick={() => {
                  router.push("/my-page/like");
                  closeSideBar();
                }}
              >
                좋아요
              </p>
              <p
                onClick={() => {
                  router.push("/my-page/cart");
                  closeSideBar();
                }}
              >
                장바구니
              </p>
              <p
                onClick={() => {
                  router.push("/my-page");
                  closeSideBar();
                }}
              >
                마이페이지
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
