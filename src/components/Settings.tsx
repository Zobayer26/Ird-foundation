import { RiSettings2Fill } from "react-icons/ri";
import { useState } from "react";
import { settingsData } from "@/utils/settings";

const Settings = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <div>
      <div onClick={() => SetToggle(!toggle)}>
        <RiSettings2Fill className="text-green-500 min-[1640px]:hidden" size={24} />
      </div>
      {toggle && (
        <div className=" absolute min-w-full h-screen  bg-slate-600  bg-opacity-40 flex top-0 left-0 z-50 ">
          <div onClick={()=>SetToggle(!toggle)}
           className=" basis-3/5  "></div>
          <div className=" basis-2/5  bg-white rounded-tl-3xl rounded-bl-3xl ">
            <h1 className=" text-center py-12">Settings</h1>
            <div className="flex flex-col px-4 gap-y-8 text-xl opacity-60">
              {settingsData.map((item) => (
                <div key={item.id}
                  className=" flex  gap-2 items-center ">
                  <item.icon />
                  <h2>{item.data}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Settings;
