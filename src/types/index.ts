import { StaticImageData } from "next/image";

export type Product = {
  brandImg: string;
  productImg: string;
  productName: string;
  productPrice: string;
  content: string;
  viewCount: string;
  isLike?: boolean;
};
