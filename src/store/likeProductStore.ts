// store.ts
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import TipanyImage from "@/app/assets/images/likes/tipany.png";
import TipanyProductImage from "@/app/assets/images/likes/tipanyProductImage.png";
import TipanyProductImage2 from "@/app/assets/images/likes/tipanyProductImage2.png";
import TipanyProductImage3 from "@/app/assets/images/likes/tipanyProductImage3.png";

interface Store {
  likeProducts: Product[];
  deleteLike: (productName: string) => void;
  addLike: (product: Product) => void;
}

const useLikeProductStore = create<Store>()(
  persist(
    (set) => ({
      likeProducts: [
        {
          brandImg: TipanyImage.src,
          productImg: TipanyProductImage.src,
          productName: `티파니앤코 리턴 투 하트 태그\n골드 18K`,
          productPrice: "1,750,000원",
          content: `보증서 보유\nA등급, 실착용 횟수 20회 이내`,
          viewCount: "112",
          isLike: true,
        },
        {
          brandImg: TipanyImage.src,
          productImg: TipanyProductImage2.src,
          productName: `티파니T 스마일 미니 이어링\n골드 18K`,
          productPrice: "1,500,000원",
          content: `보증서, 더스크백 보유 \nC등급`,
          viewCount: "215",
          isLike: true,
        },
        {
          brandImg: TipanyImage.src,
          productImg: TipanyProductImage3.src,
          productName: `티파니 락 스몰 다이아 이어링\n다이아몬드 1ct`,
          productPrice: "8,200,000원",
          content: `보증서, 박스 보유  \nA등급, 실착용 횟수 10회 이내`,
          viewCount: "215",
          isLike: true,
        },
      ],

      deleteLike: (productName) =>
        set((state) => ({
          likeProducts: state.likeProducts.filter((item) => item.productName !== productName),
        })),

      addLike: (product) =>
        set((state) => {
          const isAlreadyLiked = state.likeProducts.some((item) => item.productName === product.productName);
          if (isAlreadyLiked) return state;
          const newProduct = { ...product, isLike: true };
          return { likeProducts: [...state.likeProducts, newProduct] };
        }),
    }),
    {
      name: "like-products-storage", // ✅ localStorage key 이름
      storage: createJSONStorage(() => localStorage), // ✅ localStorage 사용
    }
  )
);

export default useLikeProductStore;
