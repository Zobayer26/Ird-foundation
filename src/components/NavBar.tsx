import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";


const NavBar = () => {
  return (
    <div>
      <div className="xl:hidden bg-white flex justify-between
       shadow-md items-center md:py-8 py-4">
        <CiHome className="opacity-50" size={24} />
        <TbCategoryPlus className="opacity-50" size={24} />
        <HiOutlineLightBulb className="opacity-50" size={24} />
        <CiBookmark className="opacity-50" size={24} />
        <FaRegCircleUser className="opacity-50" size={24} />
      </div>
      <div className="hidden  bg-white rounded-2xl mt-2 xl:flex  xl:flex-col
              justify-between min-h-[837px]  items-center md:py-8 py-4">
        <div className="w-20">
          <Image src="/unnamed 1.png" alt="" width={73} height={73} />
        </div>
        <div className="flex  flex-col justify-between items-center gap-8 ">
          <CiHome className="opacity-50" size={24} />
          <TbCategoryPlus className="opacity-50" size={24} />
          <HiOutlineLightBulb className="opacity-50" size={24} />
          <CiBookmark className="opacity-50" size={24} />
          <FaRegCircleUser className="opacity-50" size={24} />
        </div>
        <div className="w-20">
          <Image src="/I want to support.png" alt="" width={73} height={73} />
        </div>
      </div>
    </div>
  )
}

export default NavBar