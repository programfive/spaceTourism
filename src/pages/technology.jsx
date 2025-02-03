import React, { useState } from "react";
import { technology } from "../json/data.json";

export function Technology() {
  const [technologies] = useState(technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technologies[value];
  return (
    <div className=" min-h-screen tablet:h-[100%] bg-technologyDesktop tablet:bg-technologyTablet mobile:bg-technologyMobile w-100 flex items-center justify-center bg-no-repeat bg-cover bg-center">
      <div className=" mt-40 tablet:mt-40 max-w-[1400px] w-full ">
        <div className="font-normal mainText text-center  gap-x-4  tracking-[4.725px]  flex text-2xl text-white p-6 mobile:justify-center mobile::items-center">
          <span className="font-bold mobile:hidden">02</span>
          <h2>MEET YOUR CREW</h2>
        </div>
        <section className="flex justify-between  w-[80%] tablet:w-full  m-auto tablet:flex-col-reverse ">
          <div className="flex gap-x-10     tablet:flex-col tablet:justify-center tablet:items-center   ">
            <div className="  flex flex-col tablet:flex-row justify-center gap-y-12 gap-x-14 extraMobile:gap-4 items-center pt-5">
              {technologies.map((technology, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setValue(index)}
                    className="flex  w-16 h-16 extraMobile:h-12 extraMobile:w-12 justify-center items-center hover:text-textDark hover:bg-white border-2 border-solid border-white text-white specialFont text-2xl rounded-full"
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className=" max-w-[520px] flex flex-col p-5 justify-center tablet:text-center">
              <p className="text-2xl mainText uppercase tracking-[2.7px] text-grayText">
                THE TERMINOLOGY...
              </p>
              <h2 className="text-[3rem] extraMobile:text-[2rem] specialFont uppercase text-white">
                {name}
              </h2>
              <p className="text-[1.4rem] text-grayText leading-8 mainText">
                {description}
              </p>
            </div>
          </div>

          <picture className="flex justify-center items-center">
            <source srcSet={images.landscape} media="(max-width:1440px)" />
            <img
              src={images.portrait}
              alt={name}
              className="h-[30rem] w-[38rem] tablet:object-contain tablet:w-[100%] tablet:h-auto"
            />
          </picture>
        </section>
      </div>
    </div>
  );
}
