import { CiSearch } from 'react-icons/ci'
import { HiChevronDown} from 'react-icons/hi'
import FooterLine from './FooterLine';

function Footer() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 mx-12 border rounded-tl-xl rounded-tr-xl  p-4 " >
            <div className="flex items-center justify-between w-full  bg-gray-200 mb-1  " >
                <div className="font-bold text-xl" >Product Sell</div>
                <div className="flex items-center justify-between bg-gray-200 px-4  gap-2 productsell" >
                    <div className="flex items-center justify-center font-semibold">
                       <div className="h-[2.5rem] w-[2rem] text-2xl bg-gray-300 rounded-tl-xl  rounded-bl-xl p-2"> <CiSearch />  </div>
                        <input
                          className="bg-gray-300 rounded-tr-xl  rounded-br-xl p-2  inputbar"
                          placeholder="Search..."
                        />
                    </div>
                    <div className="bg-gray-300 rounded-xl p-2 w-[10rem] text-center text-gray-500 flex items-center justify-around inputbar " >
                        last 30 days
                        <div> <HiChevronDown /> </div> 
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full  bg-gray-200 mt-4 mb-4  productname " >
                <div className="text-xl text-gray-400" >Product Name</div>
                <div className="flex items-center justify-between bg-gray-200 px-8  w-[40%] " >
                    <div>Stack</div>
                    <div className="mx-2" >Price</div>
                    <div>Total Sales</div>
                </div>
            </div>

            <div className="h-[2px] w-full bg-gray-300 rounded-md " ></div>

            <FooterLine title="Abstract 3D" />
            <FooterLine title=" Sarphens Illustratin" />

        </div>
    )
}

export default Footer;