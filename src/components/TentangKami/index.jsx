import style from "./TentangKami.module.css";

const index = () => {
  return (
    <div
      id="tentangkami"
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className={style.title}
        style={{ fontFamily: "'Philosopher', sans-serif" }}
      >
        Tentang Kami
      </div>
      <div className={style.desc}>
        Matsuko.id adalah sebuah perusahaan yang bergerak dalam bidang{" "}
        <span className="italic">Business to Business</span> (B2B), dengan fokus
        utama pada penjualan kain dan aksesoris yang dirancang khusus untuk
        memenuhi kebutuhan konveksi dan industri garmen.{" "}
      </div>

      <div className={style.desc}>
        Kami memahami betapa pentingnya kualitas dan keberlanjutan dalam bisnis
        Anda, itulah sebabnya kami menyediakan beragam pilihan produk
        berkualitas tinggi yang dapat memenuhi standar produksi yang ketat.
        Dengan komitmen kami untuk memberikan layanan yang cepat, efisien, dan
        berkualitas, kami bertekad untuk menjadi mitra terpercaya bagi pelanggan
        kami dalam memenuhi kebutuhan mereka dalam industri yang dinamis ini.
      </div>
    </div>
  );
};

export default index;
