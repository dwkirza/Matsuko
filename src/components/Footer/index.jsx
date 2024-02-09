import style from "./Footer.module.css";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const index = () => {
  return (
    <div id="kontak" className={style.container}>
      <div>
        <div className={style.title}>Kontak</div>
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
          <div className={style.textsosmed}>
            Jl. Fano Arcadia Village - Tangerang
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src="/img/m.svg" width={468} height={350} alt="Logo" priority />
      </div>
    </div>
  );
};

export default index;
