"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./page.module.scss";
import Modal from "@/app/components/modals/Modal";
import useCartProductStore from "@/store/cartProductStore";
import HeartFillIcon from "@/app/assets/icons/HeartFillIcon";
import HeartNotFillIcon from "@/app/assets/icons/HeartNotFillIcon";
import useLikeProductStore from "@/store/likeProductStore";

function ProductDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandImg = searchParams.get("brandImg") as string;
  const productImg = searchParams.get("productImg") as string;
  const productName = searchParams.get("productName") as string;
  const productPrice = searchParams.get("productPrice") as string;
  const content = searchParams.get("content") as string;
  const viewCount = searchParams.get("viewCount") as string;
  const isLike = searchParams.get("isLike");
  const date = searchParams.get("date");
  const state = searchParams.get("state");

  console.log("brandImg => ", brandImg);

  const [isOpen, setIsOpen] = useState(false);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const { addCart } = useCartProductStore();
  const { deleteLike, addLike, likeProducts } = useLikeProductStore();

  const [isLikeState, setIsLikeState] = useState<boolean | null>(
    isLike === "true" ? true : isLike === "false" ? false : null
  );

  useEffect(() => {
    console.log("여기?0", productName);
    console.log(likeProducts);
    if (likeProducts.some((item) => item.productName.replaceAll("\n", "") === productName.replaceAll("\n", ""))) {
      console.log("여기?1");
      setIsLikeState(true);
    } else {
      console.log("여기?2");
      setIsLikeState(false);
    }
  }, []);

  return (
    <section className={styles["product-detail-page"]}>
      <div className={styles["product-image-wrap"]}>
        <img src={productImg} alt="brand" className={styles["product-image"]} />
        <p className={styles["view-count"]}>조회수 {viewCount}</p>
        <p className={styles["image-count"]}>1 / 1</p>
      </div>
      <section className={styles["content-wrap"]}>
        {brandImg && <img src={brandImg} alt="" className={styles["brand-img"]} />}
        <div className={styles["product-name"]}>
          {productName}
          {state !== "미승인" && state !== "승인완료" && state !== "배송중" && state !== "배송완료" && (
            <div className={styles["heart-icon-wrap"]}>
              {isLikeState === true ? (
                <div
                  onClick={() => {
                    deleteLike(productName);
                    setIsLikeState(false);
                  }}
                >
                  <HeartFillIcon />
                </div>
              ) : (
                <div
                  onClick={() => {
                    addLike({
                      brandImg,
                      productImg,
                      productName,
                      productPrice,
                      content,
                      viewCount,
                      isLike: null,
                    });
                    setIsLikeState(true);
                    setIsLikeOpen(true);
                  }}
                >
                  <HeartNotFillIcon />
                </div>
              )}
            </div>
          )}
        </div>
        <p className={styles["product-content"]}>{content.replaceAll("Q", ",")}</p>
        <p className={styles["product-price"]}>{productPrice}</p>
        {date && state && (
          <p className={styles["date-state"]}>
            {date}
            <span className={`${state === "미승인" || state === "배송완료" ? styles["gray"] : ""}`}>{state}</span>
          </p>
        )}
        {state === "미승인" && (
          <p className={styles["approval-text"]}>
            이미지 해상도가 너무 낮습니다. <br />
            좋은 해상도로 다시 업로드 부탁드려요!
          </p>
        )}
        {(state === "배송중" || state === "배송완료") && (
          <div className={styles["delivery-wrap"]}>
            <p className={styles["order-number"]}>주문번호 087541119778</p>
            <p className={styles["order-product-name"]}>{productName}(1건)</p>
            <div className={styles["payment-container"]}>
              <div className={styles["payment-wrap"]}>
                <p>결제 금액</p>
                <p className={styles["payment-price"]}>{productPrice}</p>
              </div>
              <div className={styles["payment-wrap"]}>
                <p>결제 방법</p>
                <p className={styles["payment-method"]}>카카오페이</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles["btn-container"]}>
          {(state === "배송중" || state === "배송완료") && (
            <button className={styles["delivery-button"]} onClick={() => alert("준비중인 서비스입니다.")}>
              1:1 문의
            </button>
          )}
          {state !== "미승인" && state !== "승인완료" && state !== "배송중" && state !== "배송완료" && (
            <div className={styles["two-btn-wrap"]}>
              <button
                type="button"
                className={styles["cart-button"]}
                onClick={() => {
                  setIsOpen(true);
                  addCart({
                    brandImg,
                    productImg,
                    productName,
                    productPrice,
                    content,
                    viewCount,
                    isLike: null,
                  });
                }}
              >
                장바구니
              </button>
              <button type="button" className={styles["buy-button"]} onClick={() => alert("준비중인 서비스입니다.")}>
                구매하기
              </button>
            </div>
          )}
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contentText={`장바구니에 해당 주얼리가\n담겼습니다.`}
        btnText="장바구니 내역 보기"
        btnClick={() => router.push("/my-page/cart")}
      />
      <Modal
        isOpen={isLikeOpen}
        onClose={() => setIsLikeOpen(false)}
        contentText={`좋아요가 완료되었습니다.`}
        btnText="좋아요 내역 보기"
        btnClick={() => router.push("/my-page/like")}
      />
    </section>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense>
      <ProductDetailContent />
    </Suspense>
  );
}
