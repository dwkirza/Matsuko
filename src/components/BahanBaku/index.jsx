import style from "./BahanBaku.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Mekanisme Penyediaan Bahan Baku</div>
      <div className={style.desc}>
        Mekanisme kerja di bawah ini mencakup skema atau pola penyediaan barang
        yang sudah dirancang oleh Matsuko.Id dari produsen hingga buyers.
      </div>

      <div className="mb-10  w-full flex flex-row justify-center items-center mt-9 gap-3">
        <div>
          <div className={style.wrapper_number}>
            <div className={style.number}>01</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Produsen Bahan Baku</div>
        </div>

        <div className={style.wrapper_img}>
          <Image
            src="/img/arrow.svg"
            alt="Logo"
            width={115}
            height={20}
            priority
          />
        </div>

        <div>
          <div className={style.wrapper_number}>
            <div className={style.number}>02</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Matsuko.Id</div>
        </div>

        <div className={style.wrapper_img}>
          <Image
            src="/img/arrow.svg"
            alt="Logo"
            width={115}
            height={20}
            priority
          />
        </div>

        <div>
          <div className={style.wrapper_number}>
            <div className={style.number}>03</div>
          </div>
          <div className={style.line}></div>
          <div className={style.text}>Buyers/Konveksi</div>
        </div>
      </div>
    </div>
  );
};

export default index;
