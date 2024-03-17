import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Categories from "@/components/Categories";
import Duas from "@/components/Duas";
import { settingsData } from "@/utils/settings";
const Home = () => {
  return (
    <div>
      <div className="xl:hidden flex flex-col gap-2 min-h-screen  ">
        <div className=" md:sticky top-0 z-40 ">
          <Header />
        </div>
        <div className="min-[1140px]:flex-row flex flex-col  ">
          <Categories />
          <div className="flex-grow px-7 min-[1140px]:pt-8">
            <Duas />
          </div>
        </div>
        <div className="xl:hidden px-7 sticky bottom-0 left-0  z-10">
          <NavBar />
        </div>
      </div>
      <div className="hidden xl:flex xl:gap-2">
        <div className="bg-white px-2">
          <NavBar />
        </div>
        <div className="flex flex-col">
          <Header />
          <div className="flex gap-1 pr-4">
            <Categories />
            <Duas />
            <div className="min-[1640px]:block hidden">
              <div className="min-w-[334px]">
                <h1 className=" text-center py-4 ">Settings</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
//xl:flex-row 
