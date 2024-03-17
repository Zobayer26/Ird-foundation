import Image from "next/image"
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";

let array = [1, 2, 3, 4]

const Duas = () => {
    return (
        <div>

            {/* nested  map should use here under section duas will show */}
            <div className="flex gap-1 my-4">
                <h1 className="text-green-500">Section: </h1>
                <p>The servant is dependent on his Lord</p>
            </div>
            {
                array.map((index) => (
                    <div key={index}
                        className="flex flex-col space-y-4">
                        <div className="flex gap-1 items-center">
                            <div >
                                <Image src="/allah 1 (Traced).png" alt="" width={35} height={35} />
                            </div>
                            <p>
                                1. The servant is dependent on his Lord #1
                            </p>
                        </div>
                        <p className="text-justify text-[18px]">
                            All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah,
                            while Allah is the Free of need, the Praiseworthy.
                        </p>
                        <div>
                            <h4 className=" text-green-500">
                                Reference:
                            </h4>
                            <p>
                                Surah Al-Fatir 35:15
                            </p>
                        </div>
                        <div className="flex opacity-50 justify-end gap-4">
                            <IoCopyOutline size={20}/>
                            <CiBookmark size={20}/>
                            <HiOutlineLightBulb size={20}/>
                            <IoShareSocialOutline size={20} />
                            <MdOutlineReportGmailerrorred size={20}/>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Duas