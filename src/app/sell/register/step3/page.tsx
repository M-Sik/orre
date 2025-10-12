"use client";

import React, { Suspense, useState } from "react";
import styles from "./page.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import StepIcon from "@/app/assets/icons/StepIcon";
import CheckedCheckBox from "@/app/assets/icons/CheckedCheckBox";
import NonCheckBox from "@/app/assets/icons/NonCheckBox";
import SearchIcon from "@/app/assets/icons/SearchIcon";

function Step3Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const gold = searchParams.get("gold");

  console.log("category => ", category);
  console.log("price => ", price);
  console.log("gold => ", gold);

  const [productName, setProductName] = useState("");
  const [selectBrand, setSelectBrand] = useState("전체");
  const [searchInput, setSearchInput] = useState("");
  const [accessoriesList, setAccessoriesList] = useState<any[]>([
    { title: "박스", isChecked: false },
    { title: "더스트백", isChecked: false },
    { title: "영수증", isChecked: false },
    { title: "보증서", isChecked: false },
    { title: "주얼리만 있어요", isChecked: false },
  ]);
  const [brandList, setBrandList] = useState<any[]>([
    { title: "에르메스", isChecked: false },
    { title: "불가리", isChecked: false },
    { title: "티파니 앤 코", isChecked: false },
    { title: "까르띠에", isChecked: false },
    { title: "디올", isChecked: false },
    { title: "아트딜", isChecked: false },
    { title: "루이비통", isChecked: false },
    { title: "스와로브스키", isChecked: false },
    { title: "샤넬", isChecked: false },
    { title: "셀린느", isChecked: false },
  ]);
  const [productFeature, setProductFeature] = useState("");

  const searchedBrandList = () => {
    if (searchInput === "") {
      return brandList;
    } else {
      return brandList.filter((item) => item.title.includes(searchInput));
    }
  };

  const handleBrandClick = (title: string) => {
    const newBrandList = brandList.map((item) => ({
      ...item,
      isChecked: item.title === title ? !item.isChecked : item.isChecked,
    }));
    setBrandList(newBrandList);
  };

  const handleAccessoriesClick = (title: string) => {
    const newAccessoriesList = accessoriesList.map((item) => ({
      ...item,
      isChecked: item.title === title ? !item.isChecked : item.isChecked,
    }));
    setAccessoriesList(newAccessoriesList);
  };

  const handleBtnClick = () => {
    if (!productName) {
      alert("주얼리 상품명을 입력해 주세요.");
      return;
    }
    if (accessoriesList.filter((item) => item.isChecked).length === 0) {
      alert("구성품을 선택해 주세요.");
      return;
    }
    if (!productFeature) {
      alert("상품 특징을 입력해 주세요.");
      return;
    }

    router.push(`/sell/register/step4`);
  };

  return (
    <section className={styles["sell-register-step3-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p>함량 선택</p>
        <StepIcon />
        <p className={styles["active-step"]}>주얼리 정보</p>
        <StepIcon />
        <p>사진 등록</p>
      </div>
      <p className={styles["title"]}>
        판매하고 싶은 주얼리의 <br />
        정보를 알려주세요.
      </p>
      <p className={styles["sub-title"]}>주얼리 상세 정보를 입력해 주세요.</p>
      <div className={styles["product-name-wrap"]}>
        <p>주얼리 상품명</p>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="상품명을 입력해 주세요."
        />
      </div>
      <div className={styles["brand-wrap"]}>
        <p>주얼리 브랜드</p>
        <div className={`${selectBrand === "전체" ? styles["active"] : ""}`} onClick={() => setSelectBrand("전체")}>
          브랜드가 상관없거나 광범위하게 보고싶어요{" "}
        </div>
        <div
          className={`${selectBrand !== "전체" ? styles["active"] : ""}`}
          onClick={() => setSelectBrand("원하는 브랜드가 있어요")}
        >
          원하는 브랜드가 있어요{" "}
        </div>
      </div>
      {selectBrand === "원하는 브랜드가 있어요" && (
        <div className={styles["brand-select-wrap"]}>
          <div className={styles["search-icon"]}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="검색해서 찾을 수도 있어요."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className={styles["brand-list-wrap"]}>
            {searchedBrandList().map((item, idx) => (
              <div
                key={idx}
                className={styles["brand-item"]}
                //   onClick={() => handleBrandClick(item.title)}
              >
                {item.isChecked ? (
                  <div onClick={() => handleBrandClick(item.title)}>
                    <CheckedCheckBox />
                  </div>
                ) : (
                  <div onClick={() => handleBrandClick(item.title)}>
                    <NonCheckBox />
                  </div>
                )}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles["accessories-wrap"]}>
        <p className={styles["accessories-title"]}>
          구성품 <span>*중복선택 가능</span>
        </p>
        <div className={styles["accessorie-list-wrap"]}>
          {accessoriesList.map((item, idx) => (
            <div className={styles["accessorie-item"]} key={idx}>
              <div onClick={() => handleAccessoriesClick(item.title)}>
                {item.isChecked ? <CheckedCheckBox /> : <NonCheckBox />}
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["product-feature-wrap"]}>
        <p>상품 특징</p>
        <textarea
          placeholder="주얼리의 특징, 사용감, 하자 여부 등 자유롭게 적어주세요."
          value={productFeature}
          onChange={(e) => setProductFeature(e.target.value)}
        />
      </div>
      <button className={styles["select-button"]} onClick={() => handleBtnClick()}>
        선택 완료
      </button>
    </section>
  );
}

export default function Step3Page() {
  return (
    <Suspense>
      <Step3Content />
    </Suspense>
  );
}
