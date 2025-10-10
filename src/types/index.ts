import { StaticImageData } from "next/image";

export type Product = {
  brandImg: string | null;
  productImg: string;
  productName: string;
  productPrice: string;
  content: string;
  viewCount: string;
  isLike: boolean | null;
  tag?: string;
};
