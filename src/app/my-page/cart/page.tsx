"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import CheckedCheckBox from "@/app/assets/icons/CheckedCheckBox";
import NonCheckBox from "@/app/assets/icons/NonCheckBox";
import useCartProductStore from "@/store/cartProductStore";
import ProductItem from "@/app/components/product/ProductItem";

export default function MypageCartPage() {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedProductNames, setCheckedProductNames] = useState<string[]>([]);
  const cartProducts = useCartProductStore((state) => state.cartProducts);
  const deleteCart = useCartProductStore((state) => state.deleteCart);

  const handleCheckedProduct = (productName: string) => {
    if (checkedProductNames.includes(productName)) {
      setCheckedProductNames(checkedProductNames.filter((name) => name !== productName));
    } else {
      setCheckedProductNames([...checkedProductNames, productName]);
    }
  };

  useEffect(() => {
    if (checkedProductNames.length === cartProducts.length) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [checkedProductNames]);

  return (
    <section className={styles["mypage-cart-page"]}>
      <p className={styles["title"]}>장바구니</p>
      <div className={styles["all-check-wrap"]}>
        <div className={styles["all-check-box"]}>
          {isAllChecked ? (
            <div
              onClick={() => {
                setIsAllChecked(false);
                setCheckedProductNames([]);
              }}
            >
              <CheckedCheckBox />
            </div>
          ) : (
            <div
              onClick={() => {
                setIsAllChecked(true);
                setCheckedProductNames(cartProducts.map((item) => item.productName));
              }}
            >
              <NonCheckBox />
            </div>
          )}
          <p style={{ marginLeft: "8px", marginBottom: "2px" }}>전체선택</p>
        </div>
        <button
          type="button"
          className={styles["delete-button"]}
          onClick={() => {
            deleteCart(checkedProductNames);
            alert("삭제되었습니다.");
          }}
        >
          선택 삭제
        </button>
      </div>
      {cartProducts.length > 0 ? (
        <div className={styles["list-wrap"]}>
          {cartProducts.map((item, idx) => (
            <div className={styles["list-item"]} key={idx}>
              <div onClick={() => handleCheckedProduct(item.productName)}>
                {checkedProductNames.includes(item.productName) ? <CheckedCheckBox /> : <NonCheckBox />}
              </div>
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p>장바구니에 담긴 상품이 없습니다.</p>
        </div>
      )}
      <button type="button" className={styles["buy-button"]} onClick={() => alert("준비중인 서비스입니다.")}>
        구매하기
      </button>
    </section>
  );
}
