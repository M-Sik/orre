"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function AllList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log("category => ", category);
  return <div>AllList</div>;
}
