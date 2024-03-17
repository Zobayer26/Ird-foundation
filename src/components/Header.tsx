'use client'
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { RiSettings2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { UserPanel } from "@/utils/user";
import Settings from "./Settings";

const Header = () => {
  const [toggle, SetToggle] = useState(false)
  return (
    <div className="bg-white px-8 md:px-2 md:pt-[9.5px] pt-4">
      <div className=" md:hidden flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <div className="absolute left-2">
            <FaChevronLeft className=" " size={18} />
          </div>
          <span className=" text-[18px] font-light"> Duas page</span>
        </div>
        <RiSettings2Fill className="text-green-500" size={24} />
      </div>
      <div className="hidden md:flex justify-between items-center xl:pt-8 xl:pl-8 xl:pr-2">
        <div className=" xl:hidden flex gap-1 items-center ">
          <Image src="/unnamed 1.png" alt="" width={73} height={73} />
          <h1 className=" text-xl font-medium text-gray-600">Dua & Ruqyah</h1>
        </div>
        <h1 className=" hidden xl:block xl:text-2xl
        text-xl font-medium text-gray-600">Duas Page</h1>
        <div className="flex items-center gap-x-6">
          <div className="relative">
            <input className="px-4 py-3 rounded-md 
             outline-1 outline-green-600" type="text" placeholder="Search by dua name" />
            <div className=" absolute top-1/3 right-[20px]">
              <CiSearch size={20} />
            </div>
          </div>
          <Settings/>
          <div className="relative">
            <Image onClick={() => SetToggle(!toggle)}
              src="/Group 174.png" alt="" width={67.5} height={45} />
            {
              toggle && <div className="min-w-[250px]
            absolute top-20 right-0
            bg-white">
                <div className="px-4 py-2">
                  {UserPanel.map((item) => (
                    <div className="flex gap-2 items-center py-2"
                      key={item.id}>
                      <item.icon className="text-green-500" />
                      <h4>{item.data}</h4>
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
