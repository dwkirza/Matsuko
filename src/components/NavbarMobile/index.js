// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

import style from "./NavbarMobile.module.css";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLinkClick = (targetId) => {
    setActiveSection(targetId);
    setOpenDrawer(false);
  };
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
        onClick={toggleDrawer(true)}
      >
        <HiOutlineMenu size={40} />
      </button>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="w-screen h-screen bg-[#264E85]  px-5 text-white">
          <a
            className=" w-full h-[10%] flex justify-end text-2xl pt-[35px]"
            onClick={toggleDrawer(false)}
          >
            <IoClose />
          </a>

          <div className="flex flex-col h-[90%] items-center  pt-[35px]">
            <div className="flex flex-col  h-[50%]">
              <a
                href="#beranda"
                className={`${style.text} ${
                  activeSection === "beranda" ? style.activetext : ""
                }`}
                onClick={() => handleLinkClick("beranda")}
              >
                Beranda
              </a>
              <a
                href="#tentangkami"
                className={`${style.text} ${
                  activeSection === "tentangkami" ? style.activetext : ""
                }`}
                onClick={() => handleLinkClick("tentangkami")}
              >
                Tentang Kami
              </a>
              <a
                href="#produk"
                className={`${style.text} ${
                  activeSection === "produk" ? style.activetext : ""
                }`}
                onClick={() => handleLinkClick("produk")}
              >
                Produk
              </a>
              <a
                href="#kontak"
                className={`${style.text} ${
                  activeSection === "kontak" ? style.activetext : ""
                }`}
                onClick={() => handleLinkClick("kontak")}
              >
                Kontak
              </a>
            </div>

            <div className="  w-full h-[50%] mb-[35px] flex justify-center items-end mt-[90px]">
              <Image
                src="/img/logoSecon.png"
                alt="Logo"
                width={153}
                height={55}
                priority
              />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Index;
