'use client'

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Categories = () => {

    const [toggle, setToggle] = useState(false)
    let a = [1, 2, 3, 4]

    return (
        <div>
            <div onClick={() => setToggle(true)}
                className="flex gap-2 items-center my-6 cursor-pointer">
                <FaBars />
                <span>Dua&apos;s importance</span>
            </div>
            <div>
                <div className={`${toggle ? 'translate-x-0' : "-translate-x-full"} min-w-[510px] 
             absolute duration-500 top-0 left-0  `}>
                    <div className=" bg-green-600 text-white  sticky top-0 left-0 z-10
                 cursor-default pl-5 pr-1 py-4 flex items-center justify-between">
                        <span className="text-md cursor-text">  Categories</span>
                        <div className=" cursor-pointer"
                            onClick={() => setToggle(false)}>
                            <RxCross2 size={24} />
                        </div>
                    </div>
                    <div className="min-h-full bg-white  pl-8 pt-8
                pr-2">
                        {a.map((inedx) => (
                            <div key={inedx} className="flex flex-col my-4">
                                <div className="flex justify-between">
                                    <div className="flex gap-2 ">
                                        <div>
                                            <Image src="/Frame 1.png" alt="" width={60} height={60} />
                                        </div>
                                        <div>
                                            <h1>Duas Importance</h1>
                                            <p>Subcategory:7</p>
                                        </div>
                                    </div>
                                    <div className=" text-center">
                                        <h1 className=" font-medium">21</h1>
                                        <p className=" font-light">Duas</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc list-inside">
                                        <li>
                                            <a href="#">The servant is dependent on his Lord</a>
                                        </li>
                                        <li> <a href="#">The most important thing to ask Allah for</a></li>
                                        <li> <a href="#">Ask for paradise & protection from fire</a></li>
                                        <li> <a href="#">Ask for paradise & protection from fire</a></li>
                                        <li> <a href="#">Ask for paradise & protection from fire</a></li>
                                        <li> <a href="#">Ask for paradise & protection from fire</a></li>
                                    </ul>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories