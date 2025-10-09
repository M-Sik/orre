"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const brandImg = searchParams.get("brandImg") as string;
  const productImg = searchParams.get("productImg") as string;
  const productName = searchParams.get("productName") as string;
  const productPrice = searchParams.get("productPrice") as string;
  const content = searchParams.get("content") as string;
  const viewCount = searchParams.get("viewCount") as string;
  const isLike = searchParams.get("isLike");

  console.log(brandImg, productImg, productName, productPrice, content, viewCount, isLike);
  return (
    <div>
      ProductDetailPage
      <img src={brandImg} alt="brand" />
    </div>
  );
}
