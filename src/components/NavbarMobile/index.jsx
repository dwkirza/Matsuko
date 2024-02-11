import { useState } from "react";
import style from "./NavbarMobile.module.css";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";

const Index = () => {
  return (
    <div
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Image
        src="/img/logoPrimary.png"
        alt="Logo"
        width={103}
        height={35}
        priority
      />
      <button className={style.buttonmenu}>
        <HiOutlineMenu size={40} />
      </button>
    </div>
  );
};

export default Index;