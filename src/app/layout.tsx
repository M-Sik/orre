import type { Metadata } from "next";
import localFont from "next/font/local";
import "./index.scss";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";

const pretendard = localFont({
  src: [
    {
      path: "/assets/fonts/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "/assets/fonts/Pretendard-Light.subset.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "/assets/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-Regular.subset.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-Medium.subset.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-SemiBold.subset.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/assets/fonts/Pretendard-Bold.subset.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "orre",
  description: "orre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`} style={{ paddingTop: "69.41px" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
