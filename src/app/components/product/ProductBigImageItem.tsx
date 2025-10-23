import React, { useEffect, useState } from "react";
import styles from "./productBigImageItem.module.scss";
import { Product } from "@/types";
import useLikeProductStore from "@/store/likeProductStore";
import HeartFillIcon from "@/app/assets/icons/HeartFillIcon";
import HeartNotFillIcon from "@/app/assets/icons/HeartNotFillIcon";
import Modal from "../modals/Modal";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
};

export default function ProductBigImageItem({ product }: Props) {
  const router = useRouter();
  const { likeProducts, deleteLike, addLike } = useLikeProductStore();
  const [isLikeState, setIsLikeState] = useState<boolean | null>(product.isLike);
  const [isLikeOpen, setIsLikeOpen] = useState(false);

  const moveDatailPage = () => {
    let params = `productImg=${product.productImg}&productName=${product.productName}&productPrice=${product.productPrice}&content=${product.content}&viewCount=${product.viewCount}`;
    if (product.brandImg) {
      params += `&brandImg=${product.brandImg}`;
    }
    if (product.isLike) {
      params += `&isLike=${product.isLike}`;
    }
    router.push(`/product/detail?${params}`);
  };

  useEffect(() => {
    console.log("여기?0", product.productName);
    console.log(likeProducts);
    if (
      likeProducts.some((item) => item.productName.replaceAll("\n", "") === product.productName.replaceAll("\n", ""))
    ) {
      console.log("여기?1");
      setIsLikeState(true);
    } else {
      console.log("여기?2");
      setIsLikeState(false);
    }
  }, []);

  return (
    <div className={styles["product-big-image-item"]} onClick={() => moveDatailPage()}>
      <div className={styles["image-wrap"]}>
        <img src={product.productImg} alt="feaewf" />
        {product.tag && <div className={styles["tag"]}>{product.tag}</div>}
        {isLikeState === true ? (
          <div
            className={styles["heart-icon"]}
            onClick={(e) => {
              e.stopPropagation();
              deleteLike(product.productName);
              setIsLikeState(false);
            }}
          >
            <HeartFillIcon />
          </div>
        ) : (
          <div
            className={styles["heart-icon"]}
            onClick={(e) => {
              e.stopPropagation();
              addLike({
                brandImg: product.brandImg,
                productImg: product.productImg,
                productName: product.productName,
                productPrice: product.productPrice,
                content: product.content,
                viewCount: product.viewCount,
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
      <p className={styles["product-name"]}>{product.productName}</p>
      <p className={styles["product-price"]}>₩{product.productPrice.replaceAll("원", "")}</p>
      <Modal
        isOpen={isLikeOpen}
        onClose={() => setIsLikeOpen(false)}
        contentText={`좋아요가 완료되었습니다.`}
        btnText="좋아요 내역 보기"
        btnClick={() => router.push("/my-page/like")}
      />
    </div>
  );
}
