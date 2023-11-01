import SecondCart from "./Carts/SecondRowCart";
import ThirdCart from "./Carts/ThirdCard";


function SecondRow() {
  return (
    <div className="flex  flex-col items-center justify-start w-full gap-4 px-12 py-2 my-2 secondRow  h-[full] lg:flex-row ">
          <SecondCart />
          <ThirdCart />
    </div>
  );
}

export default SecondRow;
