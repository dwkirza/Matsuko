import style from "./Keutungan.module.css";

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
        Keuntungan Untuk Konveksi
      </div>
      <div className={style.desc}>
        Matsuko.id bertujuan untuk menyederhanakan distribusi bahan tekstil
        kepada konveksi-konveksi yang umumnya menghadapi tantangan dalam
        memperoleh bahan baku dari produsen besar, terutama terkait dengan
        jumlah minimum order. Melalui platform kami, konveksi dapat dengan mudah
        mengakses berbagai jenis bahan baku sesuai dengan kebutuhan produksinya,
        tanpa terikat pada batasan jumlah minimum order yang biasanya diterapkan
        oleh produsen besar.
      </div>
    </div>
  );
};

export default index;
