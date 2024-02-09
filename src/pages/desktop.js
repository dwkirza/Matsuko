// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

// import Image from "next/image";
// import { Poppins } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar/index";
import HeadImg from "@/components/HeadImg/index";
import TentangKami from "@/components/TentangKami";
import BahanBaku from "@/components/BahanBaku";
import Keuntungan from "@/components/Keutungan";
import Produk from "@/components/Produk";
import Footer from "@/components/Footer";

export default function Desktop() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <HeadImg />
      <TentangKami />
      <BahanBaku />
      <Keuntungan />
      <Produk />
      <Footer />
    </div>
  );
}
