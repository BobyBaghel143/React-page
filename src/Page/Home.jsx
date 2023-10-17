import Sidebar from "../Component/Sidebar/Sidebar";
import MainData from "../Component/MainData/MainData";

function Home() {
  return (
    <div className="min-h-[100vh] flex flex-row justify-center items-stretch ">
      <Sidebar />
      <MainData />
    </div>
  );
}

export default Home;
