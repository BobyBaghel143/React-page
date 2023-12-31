import {HiChevronDown} from "react-icons/hi"
import Column from "./Column";



function SecondCart() {
  return (
    <div className=" basis-8/12 p-2 h-[18rem] w-[42rem] flex flex-col justify-between items-center border rounded-xl bg-gray-200 secondCart ">
      <div className="flex flex-row items-center justify-between w-full px-4">
        <div>
          <div className="font-bold" >Overview</div>
          <div className="text-gray-400" >Monthly Earning</div>
        </div>
        <div className="bg-gray-300 px-6 py-2 rounded-md flex items-center gap-2">
          Quantity
         <div> <HiChevronDown /> </div> 
        </div>
      </div>
      <div className="flex flex-row items-end justify-around  w-full" >
      <Column month="Jan"  height="h-[7rem]" />
      <Column month="Feb"  height="h-[5rem]" />
      <Column month="Mar"  height="h-[9rem]" />
      <Column month="Apr"  height="h-[7rem]" />
      <Column month="May"  height="h-[9rem]" />
      <Column month="Jun" height="h-[4rem]" />
      <Column month="Jul" height="h-[9rem]" />
      <Column month="Aug" height="h-[11rem]" background="bg-blue-500" />
      <Column month="Sep"  height="h-[10rem]" />
      <Column month="Oct" height="h-[7rem]" />
      <Column month="Nov" height="h-[6rem]" />
      <Column month="Dec"  height="h-[7rem]" />
      </div>
    </div>
  );
}

export default SecondCart;
