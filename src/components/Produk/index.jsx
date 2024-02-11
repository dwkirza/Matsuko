import style from "./Produk.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div
      id="produk"
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className={style.title}
        style={{ fontFamily: "'Philosopher', sans-serif" }}
      >
        Produk
      </div>
      <div className={style.desc}>
        Potensi penyerapan komoditas yang disediakan oleh Matsuko.id untuk
        industri konveksi dan garmen sangatlah besar. Dengan berbagai pilihan
        kain dan aksesoris berkualitas tinggi yang kami tawarkan, kami siap
        mendukung pertumbuhan dan pengembangan bisnis konveksi dan garmen Anda.
      </div>

      <div className={style.wrapper_img}>
        <div className="absolute flex flex-row items-center justify-center z-10 w-full h-[21px] md:h-[79px] bg-white top-[40%]">
          <div className={style.text}>Kain</div>
          <div className={style.text}>Zipper</div>
          <div className={style.text}>Benang</div>
          <div className={style.text}>Tali</div>
          <div className={style.text}>Mesin</div>
          <div className={style.text}>Webbing</div>
        </div>
        <div className={style.img}>
          <Image
            src="/img/kain.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>
        <div className={style.img}>
          <Image
            src="/img/zipper.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>

        <div className={style.img}>
          <Image
            src="/img/benang.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>
        <div className={style.img}>
          <Image
            src="/img/tali.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>

        <div className={style.img}>
          <Image
            src="/img/mesin.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>
        <div className={style.img}>
          <Image
            src="/img/webbing.svg"
            objectFit="cover"
            alt="Logo"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default index;
