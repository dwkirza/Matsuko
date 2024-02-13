import style from "./Footer.module.css";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const index = () => {
  return (
    <div
      id="kontak"
      className={style.container}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className>
        <div
          className={style.title}
          style={{ fontFamily: "'Philosopher', sans-serif" }}
        >
          Kontak
        </div>
        <div className={style.wrapper_sosmed}>
          <RiInstagramFill className="text-[#FBFBFD]" size={24} />
          <div className={style.textsosmed}>matsuko.id</div>
        </div>

        <div className={style.wrapper_sosmed}>
          <IoCall className="text-[#FBFBFD]" size={24} />
          <div className={style.textsosmed}>0817-102-408</div>
        </div>

        <div className={style.wrapper_sosmed}>
          <MdEmail className="text-[#FBFBFD]" size={24} />
          <div className={style.textsosmed}>matsuko.id@gmail.com</div>
        </div>

        <div className={style.wrapper_sosmed}>
          <IoLocationSharp className="text-[#FBFBFD]" size={24} />
          <div className={style.textaddres}>
            <div>Pakubuwono Terrace Apartment - Tower South Lt. 9</div>
            <div>Jl. Ciledug Raya No. 99</div>
            <div>Jakarta Selatan</div>
          </div>
        </div>
      </div>
      <div className={style.wrapper_img}>
        <div className={style.img}>
          <Image src="/img/m.png" fill alt="Logo" priority />
        </div>
      </div>
    </div>
  );
};

export default index;
