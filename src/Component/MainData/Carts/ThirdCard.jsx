import '../css/custom.css'

function ThirdCart() {
  return (
    <div className=" basis-4/12 p-2 h-[18rem] w-[13rem] flex flex-col justify-between items-center border rounded-xl bg-gray-200  customer ">
      <div className="flex flex-start flex-col w-full p-2  ">
          <div className="font-bold">Customers</div>
          <div className="text-gray-400">Customers that buy products</div>
      </div>
      <div className="bg-gray-300  rounded-full p-[1.2rem] mb-6  " >
        <div className="bg-purple-700 p-[1.3rem] rounded-full" >
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-5  percent">
            <div className="flex font-bold text-2xl" > 65% </div>
            <div className="text-sm" >Total New</div>
            <div className="text-sm" >Customers</div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ThirdCart;
