import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi2";
const NavBar = () => {
  return (
    <div className="relative">
      <div className=" sticky bottom-0 left-0  z-20 bg-white flex justify-between items-center py-4">
        <CiHome  size={24}/>
        <TbCategoryPlus size={24} />
        <HiOutlineLightBulb size={24} />
        <CiBookmark size={24} />
        <FaRegCircleUser size={24} />
    </div>
    </div>
  )
}

export default NavBar