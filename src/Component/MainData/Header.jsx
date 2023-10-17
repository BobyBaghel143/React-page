import { CiSearch } from "react-icons/ci"

function Header() {
  return (
    <div className="flex items-center justify-between w-full px-14 mb-2">
      <div className=" mt-5 px-1  py-2 font-semibold text-xl">Hello Shahrukh 👋 </div>
      <div className="flex items-center justify-center font-semibold">
        <div className="h-[2.5rem] w-[2rem] text-2xl bg-white rounded-tl-xl  rounded-bl-xl p-2"> <CiSearch />  </div>
        <input
          className="bg-white  rounded-tr-xl  rounded-br-xl p-2"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
