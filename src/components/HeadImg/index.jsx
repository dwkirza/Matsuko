import Image from "next/image";
import style from "./HeadImg.module.css";
import { IoLogoWhatsapp } from "react-icons/io";

const index = () => {
  return (
    <div
      id="beranda"
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.wrapper_img}>
        <Image src="/img/kain.png" objectFit="cover" alt="Logo" fill priority />
      </div>

      <div className={style.wrapper_action}>
        <div className={style.text}>Solusi Untuk Kebutuhan Konveksi Anda</div>
        <a
          target="_black"
          href="https://wa.me/62817102408"
          className={style.button}
        >
          {" "}
          <IoLogoWhatsapp />
          <span>Kontak Kami</span>
        </a>
      </div>
    </div>
  );
};

export default index;
