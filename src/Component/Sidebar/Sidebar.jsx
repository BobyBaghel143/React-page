// import './Sidebar.css';

// import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./Upperhalf";

function Sidebar() {
    return (
      <div className="overflow-y-auto basis-2/10 flex flex-col items-center justify-between bg-blue-700 text-white">
        <Upperhalf />
      </div>
    )
}

export default Sidebar;