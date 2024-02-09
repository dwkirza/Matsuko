import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

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

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (targetId) => {
    setActiveSection(targetId);
    smoothScroll(targetId);
  };

  return (
    <div className={`${style.container} ${isScrolling ? style.scrolling : ""}`}>
      {isScrolling ? (
        <div>
          <Image
            src="/img/logoSecon.png"
            alt="Logo"
            width={206}
            height={71}
            priority
          />
        </div>
      ) : (
        <div>
          <Image
            src="/img/logoPrimary.png"
            alt="Logo"
            width={206}
            height={71}
            priority
          />
        </div>
      )}
      {isScrolling ? (
        <div className={style.wrapper_menu}>
          <a
            href="#beranda"
            className={`${style.text} ${
              activeSection === "beranda" ? style.activeScroll : ""
            }`}
            onClick={() => handleLinkClick("beranda")}
          >
            Beranda
          </a>
          <a
            href="#tentangkami"
            className={`${style.text} ${
              activeSection === "tentangkami" ? style.activeScroll : ""
            }`}
            onClick={() => handleLinkClick("tentangkami")}
          >
            Tentang Kami
          </a>
          <a
            href="#produk"
            className={`${style.text} ${
              activeSection === "produk" ? style.activeScroll : ""
            }`}
            onClick={() => handleLinkClick("produk")}
          >
            Produk
          </a>
          <a
            href="#kontak"
            className={`${style.text} ${
              activeSection === "kontak" ? style.activeScroll : ""
            }`}
            onClick={() => handleLinkClick("kontak")}
          >
            Kontak
          </a>
        </div>
      ) : (
        <div className={style.wrapper_menu}>
          <a
            href="#beranda"
            className={`${style.text} ${
              activeSection === "beranda" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("beranda")}
          >
            Beranda
          </a>
          <a
            href="#tentangkami"
            className={`${style.text} ${
              activeSection === "tentangkami" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("tentangkami")}
          >
            Tentang Kami
          </a>
          <a
            href="#produk"
            className={`${style.text} ${
              activeSection === "produk" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("produk")}
          >
            Produk
          </a>
          <a
            href="#kontak"
            className={`${style.text} ${
              activeSection === "kontak" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("kontak")}
          >
            Kontak
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
