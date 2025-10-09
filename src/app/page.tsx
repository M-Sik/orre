"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import GoldImage from "@/app/assets/images/main/gold.png";
import TriangleIcon from "@/app/assets/images/main/triangle.png";
import BagImage from "@/app/assets/images/main/bag.png";
import MoneyImage from "@/app/assets/images/main/money.png";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const [now, setNow] = useState<Date>(() => new Date());

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1); // 월은 0-base
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());

  function pad(n: number) {
    return n.toString().padStart(2, "0");
  }

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles["main-page"]}>
      <div className={styles["title-wrap"]}>
        <p className={styles["title"]}>금시세</p>
        <p className={styles["date"]}>{`${year}.${month}.${day} ${hours}:${minutes}`}</p>
      </div>
      <div className={styles["gold-wrap"]}>
        <img src={GoldImage.src} alt="금시세" className={styles["gold-image"]} />
        <div className={styles["price-wrap"]}>
          <p className={styles["unit"]}>1g</p>
          <p className={styles["price"]}>
            151,900<span style={{ fontSize: "24px", marginLeft: "2px" }}>원</span>
          </p>
        </div>
        <div className={styles["price-wrap"]}>
          <p className={styles["done-unit"]}>1돈</p>
          <p className={styles["done-price"]}>
            569,625<span style={{ fontSize: "24px", marginLeft: "2px" }}>원</span>
          </p>
        </div>
        <div className={styles["change-price-wrap"]}>
          <p>+500</p>
          <img src={TriangleIcon.src} alt="triangle" className={styles["triangle-icon"]} />
          <p className={styles["change-price-percent"]}>0.33%</p>
        </div>
      </div>
      <div className={styles["card-container"]}>
        <div className={styles["card-wrap"]} onClick={() => router.push("/buy")}>
          <p className={styles["card-title"]}>사고 싶어요</p>
          <p className={styles["card-content"]}>쇼핑하기</p>
          <div className={styles["image-wrap"]}>
            <img src={BagImage.src} alt="bag" className={styles["bag-image"]} />
          </div>
        </div>
        <div className={styles["card-wrap"]} onClick={() => router.push("/sell")}>
          <p className={styles["card-title"]}>팔고 싶어요</p>
          <p className={styles["card-content"]}>위탁신청</p>
          <div className={styles["image-wrap"]}>
            <img src={MoneyImage.src} alt="money" className={styles["money-image"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
