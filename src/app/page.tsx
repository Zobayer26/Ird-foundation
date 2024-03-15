import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Categories from "@/components/Categories";
import Duas from "@/components/Duas";

const Home = () => {
  return (
    <div className="px-8 flex flex-col gap-2 min-h-screen pt-4">
      <Header />
      <Categories/>
      <div className="flex-grow">
        <Duas/>
      </div>
      <div className="sticky bottom-0 left-0  z-10">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
