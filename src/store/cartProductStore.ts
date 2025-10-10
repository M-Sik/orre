// store.ts
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import TipanyImage from "@/app/assets/images/carts/tipany.png";
import TipanyProductImage from "@/app/assets/images/carts/tipanyProductImage.png";

import HermesImage from "@/app/assets/images/carts/hermes.png";
import HermesProductImage from "@/app/assets/images/carts/hermesProductImage.png";

interface Store {
  cartProducts: Product[];
  deleteCart: (productNames: string[]) => void;
  addCart: (product: Product) => void;
}

const useCartProductStore = create<Store>()(
  persist(
    (set) => ({
      cartProducts: [
        {
          brandImg: HermesImage.src,
          productImg: HermesProductImage.src,
          productName: `에르메스 팝아슈 미니 골드\n골드 18K`,
          productPrice: "1,750,000원",
          content: `보증서 보유 \nB등급, 실착용 횟수 20회 이내`,
          viewCount: "32",
          isLike: null,
        },
        {
          brandImg: TipanyImage.src,
          productImg: TipanyProductImage.src,
          productName: `티파니 락 스몰 다이아 이어링\n다이아몬드 1ct`,
          productPrice: "8,200,000원",
          content: `보증서, 박스 보유  \nA등급, 실착용 횟수 10회 이내`,
          viewCount: "215",
          isLike: null,
        },
      ],

      deleteCart: (productNames) =>
        set((state) => ({
          cartProducts: state.cartProducts.filter((item) => !productNames.includes(item.productName)),
        })),

      addCart: (product) =>
        set((state) => {
          const isAlreadyCart = state.cartProducts.some((item) => item.productName === product.productName);
          if (isAlreadyCart) return state;
          const newProduct = { ...product };
          return { cartProducts: [...state.cartProducts, newProduct] };
        }),
    }),
    {
      name: "cart-products-storage", // ✅ localStorage key 이름
      storage: createJSONStorage(() => localStorage), // ✅ localStorage 사용
    }
  )
);

export default useCartProductStore;
