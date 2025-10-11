"use client";

import React, { Suspense } from "react";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";

function Step1Content() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log("category => ", category);

  return <section className={styles["jewelry-search-step2-page"]}>Step1Page</section>;
}

export default function Step1Page() {
  return (
    <Suspense>
      <Step1Content />
    </Suspense>
  );
}
