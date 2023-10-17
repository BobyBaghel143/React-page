import FirstCart from "./Carts/FirstRowCart";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { SlEarphonesAlt } from "react-icons/sl";
import { AiOutlineLock } from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi2"
import {HiArrowSmallUp} from "react-icons/hi2"

function FirstRow() {
  return (
    <div className="flex flex-wrap items-center justify-start w-full gap-4 px-12 py-2">
      <FirstCart
        title="Earning"
        price="$198k"
        perc="37.5 %"
        fontColor="text-green-500"
        background="bg-green-300"
        icon={<PiCurrencyCircleDollarBold />}
        aero={<HiArrowSmallUp />}
      />
      <FirstCart
        title="Earning"
        price="$2.4k"
        perc="2 %"
        fontColor="text-red-500"
        background="bg-red-300"
        icon={<LiaBookSolid />}
        aero={<HiArrowDown />}
      />
      <FirstCart
        title="Earning"
        price="$2.4k"
        perc="2.4 %"
        fontColor="text-red-500"
        background="bg-red-300"
        icon={<SlEarphonesAlt />}
        aero={<HiArrowDown />}
      />
      <FirstCart
        title="Earning"
        price="$89k"
        perc="89 %"
        fontColor="text-green-500"
        background="bg-green-300"
        icon={<AiOutlineLock />}
        aero={<HiArrowSmallUp />}
      />
    </div>
  );
}

export default FirstRow;
