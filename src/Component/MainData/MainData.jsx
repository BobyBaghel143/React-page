import Header from "./Header";
import FirstRow from './FirstRow';
import SecondRow from "./SecondRow";
import Footer from "./Down/Footer";



function MainData() {

  return (
    <div className=" flex sm:max-xl:bg-blue-50 md:flex-col  " >
      <div className="basis-8/10 flex flex-col justify-center py-4  text-black bg-[#f6f6f8] gap-6 ">
        <Header/>
        <div className="flex flex-row  items-center justify-center    ">
          <FirstRow />
        </div>
        <div className="flex flex-row justify-around h-[20rem]  w-full rounded-md">
          <SecondRow />
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default MainData;
