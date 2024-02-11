// Copyright 1999-2024. Plesk International GmbH. All rights reserved.
import NavbarMobile from "@/components/NavbarMobile";
import HeadImg from "@/components/HeadImg/index";
import TentangKami from "@/components/TentangKami";
import BahanBakuMobile from "@/components/BahanBakuMobile";
import Keuntungan from "@/components/Keutungan";
import Produk from "@/components/Produk";
import Footer from "@/components/Footer";
export default function Mobile() {
  return (
    <div className="relative w-full h-full">
      <NavbarMobile />
      <HeadImg />
      <TentangKami />
      <BahanBakuMobile />
      <Keuntungan />
      <Produk />
      <Footer />
    </div>
  );
}
