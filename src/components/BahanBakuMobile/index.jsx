import style from "./BahanBaku.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className={style.title}
        style={{ fontFamily: "'Philosopher', sans-serif" }}
      >
        Mekanisme Penyediaan Bahan Baku
      </div>
      <div className={style.desc}>
        Mekanisme kerja di bawah ini mencakup skema atau pola penyediaan barang
        yang sudah dirancang oleh Matsuko.Id dari produsen hingga buyers.
      </div>

      <div className={style.wrapper_stepper}>
        <div className={style.wrapper}>
          <div className={style.wrapper_number}>
            <div className={style.numbersatu}>01</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Produsen Bahan Baku</div>
        </div>

        <div className={style.wrapper_img}>
          <Image
            src="/img/arrowmobile.svg"
            alt="Logo"
            width={115}
            height={20}
            priority
          />
        </div>

        <div className={style.wrapper}>
          <div className={style.wrapper_number}>
            <div className={style.number}>02</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Matsuko.Id</div>
        </div>

        <div className={style.wrapper_img}>
          <Image
            src="/img/arrowmobile.svg"
            alt="Logo"
            width={115}
            height={20}
            priority
          />
        </div>

        <div className={style.wrapper}>
          <div className={style.wrapper_number}>
            <div className={style.number}>03</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Buyers / Konveksi</div>
        </div>
      </div>
    </div>
  );
};

export default index;
