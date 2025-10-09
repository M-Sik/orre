"use client";

import React from "react";
import styles from "./modal.module.scss";
import CloseIcon from "@/app/assets/icons/CloseIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  contentText: string;
  btnText: string;
  btnClick: () => void;
};

export default function Modal({ isOpen, onClose, contentText, btnText, btnClick }: Props) {
  return (
    <>
      {isOpen && (
        <section className={styles["modal"]}>
          <section className={styles["modal-content"]}>
            <div className={styles["close-icon-wrap"]} onClick={() => onClose()}>
              <CloseIcon />
            </div>
            <p className={styles["content-text"]}>{contentText}</p>
            <div className={styles["btn-wrap"]}>
              <button className={styles["btn"]} onClick={btnClick}>
                {btnText}
              </button>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
