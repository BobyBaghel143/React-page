import '../css/custom.css'

function FirstCart({ title, price, perc, fontColor, background, icon ,aero }) {
  return (
    <div className=" h-[10rem] w-[16rem] flex flex-row justify-around items-center border rounded-xl bg-gray-200 mx-[.4rem] cart ">
      <div className={`h-[5rem] w-[5rem] rounded-full flex items-center justify-center  text-4xl ${background} icon `  }>
        {icon}
      </div>

      <div className="">
        <div className="text-gray-400" >{title }</div>
        <div className="font-semibold text-2xl">{price} </div>
        <div className="flex gap-1"> <div className={` flex items-center  ${fontColor}   earning  `}> {aero}  {perc} </div> this months </div>
      </div>
    </div>
  );
}

export default FirstCart;
