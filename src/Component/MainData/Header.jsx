import { CiSearch } from "react-icons/ci";

import "./css/custom.css";

function Header() {
  return (
    <div className="flex items-center justify-between w-full px-14 mb-2 header ">
      <div className=" mt-5 px-1  py-2 font-semibold text-xl ">  Hello Shahrukh 👋 </div>
      <div className="flex items-center justify-center font-semibold search ">
        <div className="h-[2.5rem] w-[2rem] text-2xl bg-gray-200 rounded-tl-xl  rounded-bl-xl p-2 searchicon "> <CiSearch /> </div>
        <input
          className="bg-gray-200 rounded-tr-xl  rounded-br-xl p-2  "
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
