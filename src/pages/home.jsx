import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full min-h-screen flex  items-center h-[100vh] tablet:h-auto bg-HomeDesktop tablet:bg-HomeTablet mobile:bg-HomeMobile bg-no-repeat bg-cover bg-center  ">
      <div className=" flex  justify-between items-center gap-y-6 tablet:flex-col tablet:justify-center  w-full max-w-[1200px] m-auto p-5 extraMobile:pb-10 extraMobile:pt-28 mt-52 ">
        <section className=" w-full max-w-[520px] p-2 tablet:text-center">
          <p className="font-normal text-[1.8rem] extraMobile:text-[1.6rem] tracking-[4.725px] mainText text-grayText ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className=" text-[10rem] mobile:text-[8rem]  extraMobile:text-[5rem]  specialFont font-normal text-white ">
            SPACE
          </h1>
          <p className="text-[1.4rem] text-grayText leading-8 mainText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link
          to="/destination"
          className="w-[18rem]   h-[18rem] extraMobile:w-[15rem] extraMobile:h-[15rem]  rounded-full
         tracking-[2px] bg-white  flex justify-center items-center self-end tablet:self-center  relative  "
        >
          <div className="absolute transform w-full h-full bg-transparent rounded-full opacity-[0.5]  hover:block duration-75  hover:scale-[1.4] hover:bg-gray-300"></div>
          <h2 className="z-10 text-textDar specialFont text-[1.8rem]">
            EXPLORE
          </h2>
        </Link>
      </div>
    </div>
  );
}
