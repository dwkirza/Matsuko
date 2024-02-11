// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

import style from "./NavbarMobile.module.css";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { Drawer } from "antd";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleLinkClick = (targetId) => {
  //   setActiveSection(targetId);
  // };
  return (
    <div
      className={`${style.container} ${isScrolling ? style.scrolling : ""}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {isScrolling ? (
        <Image
          src="/img/logoSecon.png"
          alt="Logo"
          width={103}
          height={35}
          priority
        />
      ) : (
        <Image
          src="/img/logoPrimary.png"
          alt="Logo"
          width={103}
          height={35}
          priority
        />
      )}

      <button
        className={`${style.buttonmenu} ${
          isScrolling ? style.buttonmenuactive : ""
        }`}
        // onClick={showDrawer}
      >
        <HiOutlineMenu size={40} />
      </button>

      {/* <Drawer
        size="large"
        placement="right"
        title="Basic Drawer"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col  items-center">
          <a
            href="#beranda"
            className={`${style.text} ${
              activeSection === "beranda" ? style.activetext : ""
            }`}
          >
            Beranda
          </a>
          <a
            href="#tentangkami"
            className={`${style.text} ${
              activeSection === "tentangkami" ? style.activetext : ""
            }`}
          >
            Tentang Kami
          </a>
          <a
            href="#produk"
            className={`${style.text} ${
              activeSection === "produk" ? style.activetext : ""
            }`}
          >
            Produk
          </a>
          <a
            href="#kontak"
            className={`${style.text} ${
              activeSection === "kontak" ? style.activetext : ""
            }`}
          >
            Kontak
          </a>

          <div className=" w-full flex justify-center items-center mt-[90px]">
            <Image
              src="/img/logoSecon.png"
              alt="Logo"
              width={103}
              height={35}
              priority
            />
          </div>
        </div>
      </Drawer> */}
    </div>
  );
};

export default Index;
