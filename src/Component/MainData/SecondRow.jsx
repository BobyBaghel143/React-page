import SecondCart from "./Carts/SecondRowCart";
import ThirdCart from "./Carts/ThirdCard";

import './css/custom.css'

function SecondRow() {
  return (
    <div className="flex items-center justify-start w-full gap-4 px-12 py-2 my-2 secondRow  h-[full] ">
          <SecondCart />
          <ThirdCart />
    </div>
  );
}

export default SecondRow;
