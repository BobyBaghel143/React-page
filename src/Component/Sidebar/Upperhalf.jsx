import { RiSettingsLine } from "react-icons/ri";
import { PiKeyLight } from "react-icons/pi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiCog } from "react-icons/hi";
import { TbHelpOctagon } from "react-icons/tb";
import { HiChevronDown } from "react-icons/hi"
import Comp from "./Comp";

function Upperhalf() {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="max-h-[30rem] w-full p-4 flex flex-col items-center justify-center gap-3 mt-4 " >
        <div className=" flex justify-center items-center gap-4 pr-[5rem] w-full p-3 mb-2  font-semibold text-3xl "> <RiSettingsLine /> Dashboard </div>
        <div className="flex flex-col justify-between items-center text-white gap-3 w-full  mt-2 px-4  ">
          <div className="flex justify-start items-center gap-3 w-full text-xl bg-slate-500 text-gray-300 rounded-md p-2"> <PiKeyLight /> Dashboard </div>
          <Comp name="Product" icon={<MdProductionQuantityLimits />} />
          <Comp name="Customer" icon={<FaRegUserCircle />} />
          <Comp name="Income" icon={<RiCustomerServiceFill />} />
          <Comp name="Pramote" icon={<HiCog />} />
          <Comp name="Help" icon={<TbHelpOctagon />} />
        </div>
      </div>

      <div className="flex items-center justify-between w-full mb-[3rem] px-4 "> 
      <div className="flex items-center">
        <div className=" w-[3rem] h-[3rem] rounded-full text-bold text-2xl flex items-center justify-center bg-blue-200 "> A </div>
        <div className="px-4">
          <div className="text-xl font-semibold"> Evano </div>
          <div className="text-gray-400"> Project Manager </div>
        </div>
        </div>
        <div> <HiChevronDown /> </div>
      </div>
      
    </div>
  );
}

export default Upperhalf;
