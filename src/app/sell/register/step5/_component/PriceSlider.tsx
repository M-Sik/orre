"use client";

import React, { useEffect, useState } from "react";
import "./PriceSlider.scss";

type Props = {
  setStrPrice: (strPrice: string) => void;
};

export default function PriceSlider({ setStrPrice }: Props) {
  const [value, setValue] = useState(4000000);

  const formatPrice = (num: number) => {
    if (num >= 8000000) return "8,000,000~";
    return num.toLocaleString();
  };

  // 슬라이더 진행 비율 (0 ~ 100%)
  const percent = (value / 8000000) * 100;
  const addCommas = (num: number) => {
    return num.toLocaleString();
  };

  // ✅ 렌더링 이후에 문자열 갱신
  useEffect(() => {
    const strPrice = `${addCommas(value)}원${value >= 8000000 ? "~" : ""}`;
    setStrPrice(strPrice);
  }, [value]);

  return (
    <div className="price-slider">
      {/* 툴팁 */}
      <div className="tooltip" style={{ left: `calc(${percent}% - 0px)` }}>
        <div className="tooltip-text">
          {/* {value < 8000000 ? "~" : ""} */}
          {(value / 10000).toFixed(0)}만원{value >= 8000000 ? "~" : ""}
        </div>
        <div className="tooltip-arrow" />
      </div>

      {/* 슬라이더 */}
      <input
        type="range"
        min={0}
        max={8000000}
        step={10000}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        // style={{
        //   background: `linear-gradient(to right, #f9a825 ${percent}%, #e5e5e5 ${percent}%)`,
        // }}
      />

      {/* 눈금 */}
      <div className="labels">
        {[0, 8000000].map((price, idx) => (
          <span key={idx}>{formatPrice(price)}</span>
        ))}
      </div>
    </div>
  );
}
