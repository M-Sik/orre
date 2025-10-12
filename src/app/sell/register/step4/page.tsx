"use client";

import StepIcon from "@/app/assets/icons/StepIcon";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import AddPhotoBtn from "./_image/image.png";
import CheckedCheckBox from "@/app/assets/icons/CheckedCheckBox";
import NonCheckBox from "@/app/assets/icons/NonCheckBox";
import { useRouter } from "next/navigation";

export default function Step4Page() {
  const router = useRouter();
  const [uploadPhoto, setUploadPhoto] = useState<any[]>([]);
  const [imageList, setImageList] = useState<any[]>(["", "", "", "", "", "", "", "", "", ""]);
  const [agrees, setAgrees] = useState<any[]>([
    { title: "만 19세 이상의 성인이에요.", isChecked: false },
    { title: "서비스 이용약관과 운영정책을 확인했어요.", isChecked: false },
    {
      title:
        "위탁 판매 요청 상품이 모조품(상표법 제93조) 및 장물(형법 제362조)일 경우 민/형사상 책임을 지는 것에 동의합니다.",
      isChecked: false,
    },
    {
      title:
        "위탁 판매 요청 상품이 모조품 및 장물일 경우, 오레로부터 제공받은 주얼리 감정 및 서비스 비용(10만원)과 배송서비스 비용 전액을 환불할 것에 동의합니다.",
      isChecked: false,
    },
  ]);

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);

    const localPreviews = fileArray.map((file) => URL.createObjectURL(file));
    setUploadPhoto((prev: any) => [...localPreviews, ...prev]);
  };

  const handleAgreeClick = (index: number) => {
    const newAgrees = [...agrees];
    newAgrees[index].isChecked = !newAgrees[index].isChecked;
    setAgrees(newAgrees);
  };

  const handleSubmit = () => {
    if (uploadPhoto.length === 0) {
      alert("상품 사진을 등록해 주세요.");
      return;
    }
    if (agrees.filter((item) => item.isChecked).length !== 4) {
      alert("모든 약관에 동의해 주세요.");
      return;
    }
    router.push("/sell/register/step5");
  };

  useEffect(() => {
    setImageList((prev) => {
      const newList = [...prev];
      uploadPhoto.forEach((url, index) => {
        newList[index] = url;
      });
      return newList;
    });
  }, [uploadPhoto]);
  return (
    <section className={styles["sell-register-step4-page"]}>
      <div className={styles["step-wrap"]}>
        <p>카테고리 선택</p>
        <StepIcon />
        <p>함량 선택</p>
        <StepIcon />
        <p>주얼리 정보</p>
        <StepIcon />
        <p className={styles["active-step"]}>사진 등록</p>
      </div>
      <p className={styles["title"]}>
        판매하고 싶은 주얼리의 <br />
        상품사진을 등록해 주세요
      </p>
      <p className={styles["sub-title"]}>상품 사진 최소 1장 최대 10장을 등록해 주세요.</p>
      <div className={styles["point-title-wrap"]}>
        <p>* 모델을 특정할 수 있는 정면, 측면, 후면 등의 사진</p>
        <p>* 상품 상태를 확인할 수 있는 클로즈업 사진</p>
      </div>
      <div className={styles["add-photo-wrap"]}>
        <div className={styles["add-photo-btn"]} onClick={() => document.querySelector("input")?.click()}>
          <img src={AddPhotoBtn.src} alt="" />
          <p>{`파일 업로드(${uploadPhoto.length}/10)`}</p>
          <input type="file" accept="image/*" multiple onChange={(e) => handleUploadPhoto(e)} />
        </div>
      </div>
      <div className={styles["imgae-container"]}>
        {imageList.map((item, index) => (
          <div className={styles["image-item"]} key={index}>
            {item && <img src={item} alt="" />}
          </div>
        ))}
      </div>
      <div className={styles["agree-wrap"]}>
        {agrees.map((item, index) => (
          <div className={styles["agree-item"]} key={index}>
            {item.isChecked ? (
              <div onClick={() => handleAgreeClick(index)}>
                <CheckedCheckBox />
              </div>
            ) : (
              <div onClick={() => handleAgreeClick(index)}>
                <NonCheckBox />
              </div>
            )}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button className={styles["submit-button"]} onClick={() => handleSubmit()}>
        신청 완료하기
      </button>
    </section>
  );
}
