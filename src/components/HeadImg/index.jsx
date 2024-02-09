import Image from "next/image";
import style from "./HeadImg.module.css";

const index = () => {
  return (
    <div id="beranda" className={style.container}>
      <div className={style.wrapper_img}>
        <Image src="/img/kain.png" objectFit="cover" alt="Logo" fill priority />
      </div>

      <div className={style.wrapper_action}>
        <div className={style.text}>Solusi Untuk Kebutuhan Konveksi Anda</div>
        <a href="#kontak" className={style.button}>
          <span> Kontak Kami</span>
        </a>
      </div>
    </div>
  );
};

export default index;
