import { HiChevronRight } from "react-icons/hi";

function Comp({name, icon}) {
  return (
    <div className="flex items-center justify-between text-xl  w-full p-2">
      <div className="flex justify-center items-center gap-3 "> {icon} {name} </div>
      <HiChevronRight />
    </div>
  );
}

export default Comp;
