import Header from "./Header";
import FirstRow from './FirstRow';
import SecondRow from "./SecondRow";
import Footer from "./Down/Footer";

import './css/MainData.css'
// import Styled from "styled-components";



function MainData() {

  // const Stylecompo = Styled.div`
  //  width:900px;

  //  @media(min-width:0px) and (max-width-768px){
  //   display:fle;
  //   item:center;
  //   justify-content:center;

  //  }
  // `;

  return (
    <div className="basis-8/10 flex flex-col justify-between py-4  text-black bg-[#f6f6f8] gap-6 ">
      <Header/>
      <div className="flex flex-row  items-center justify-center flex-wrap">
        <FirstRow />
      </div>
      <div className="flex flex-row   justify-around h-[20rem]  w-full rounded-md  ">
        <SecondRow />
      </div>
        <Footer />
    </div>
  );
}

export default MainData;
