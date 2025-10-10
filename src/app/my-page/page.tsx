"use client";

import styles from "./page.module.scss";

import TipanyImage from "./_image/tipany.png";
import TipanyProductImage from "./_image/tipanyProductImage.png";
import ProductItem from "../components/product/ProductItem";
import { useRouter } from "next/navigation";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import ProductDateWrap from "../components/product/ProductDateWrap";

const deliveryProduct = {
  date: "2025.10.28",
  state: "배송중",
  product: {
    brandImg: TipanyImage.src,
    productImg: TipanyProductImage.src,
    productName: `티파니앤코 리턴 투 하트 태그\n골드 18K`,
    productPrice: "1,750,000원",
    content: `보증서 보유\nA등급, 실착용 횟수 20회 이내`,
    viewCount: "112",
    isLike: null,
  },
};

const navigates = [
  { title: "구입내역", href: "/my-page/buy" },
  { title: "판매내역", href: "/my-page/sell" },
  { title: "좋아요", href: "/my-page/like" },
  { title: "장바구니", href: "/my-page/cart" },
];

export default function MypagePage() {
  const router = useRouter();

  return (
    <section className={styles["mypage-page"]}>
      <p className={styles["title"]}>마이페이지</p>
      <p className={styles["sub-title"]} style={{ marginTop: "12px" }}>
        박다온
      </p>
      <div className={styles["info-wrap"]}>
        <p>서울특별시 강남구 압구정로 343, 현대아파트 (압구정동 현대7차)</p>
        <p>010-6482-1212</p>
      </div>
      <div className={styles["divider"]} />
      <p className={styles["sub-title"]} style={{ marginBottom: "10px" }}>
        진행 중 주문 현황
      </p>
      <ProductDateWrap date={deliveryProduct.date} state={deliveryProduct.state} product={deliveryProduct.product} />
      <div className={styles["divider"]} style={{ marginBottom: "0" }} />
      <div className={styles["navigate-wrap"]}>
        {navigates.map((item, idx) => (
          <div key={idx} onClick={() => router.push(item.href)} className={styles["navigate-item"]}>
            <p>{item.title}</p>
            <div>
              <ArrowRightIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
