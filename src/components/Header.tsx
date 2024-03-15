
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { RiSettings2Fill } from "react-icons/ri";


const Header = () => {
  return (
    <div>
      <div className=" md:hidden flex justify-between items-center ">
      <div className="flex items-center space-x-2">
         <div className="absolute left-2">
         <FaChevronLeft className=" " size={18} />
         </div>
        <span className=" text-[18px] font-light"> Duas page</span>
      </div>
      <RiSettings2Fill className="text-green-500" size={24}/>
    </div>
    <div>
      <div>
        <Image src="/unnamed 1.png" alt="" width={73} height={73}/>
      </div>
      <div></div>
    </div>
    </div>
  );
};

export default Header;
