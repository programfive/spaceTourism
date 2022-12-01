import React, { useState, useEffect } from "react";
import { destinations } from "../json/data.json";

export function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];
  return (
    <div className="w-full h-[100vh] tablet:h-auto bg-destinationDesktop tablet:bg-destinationTablet mobile:bg-destinationMobile bg-no-repeat bg-center bg-cover flex items-center ">
      <div className=" max-w-[1200px] m-auto w-[90%] mt-40 p-5 ">
        <div className="mb-5 font-normal mainText  gap-x-4  tracking-[4.725px]  flex text-2xl text-white p-4 mobile:text-center">
          <span className="font-bold mobile:hidden">01</span>
          <h2>MEET YOUR CREW COMMANDER </h2>
        </div>
        <section className=" flex justify-center gap-x-16 tablet:flex-col tablet:items-center tablet:gap-y-20 ">
          <div className=" max-w-[420px] object-contain w-full ">
            <img src={images.png} alt="" />
          </div>

          <div className="max-w-[500px] w-full tablet:text-center ">
            <div className="flex items-center gap-x-8 tablet:gap-x-16 extraMobile:gap-3 mobile:gap-8 tablet:justify-center tablet:items-center  text-grayText hover:text-white text-[1.6rem] mainText  pb-4 ">
              {planets.map((planet, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setValue(index);
                    }}
                    className="relative transition-all duration-75  before:absolute before:w-full mainText uppercase
                 before:h-[3px] before:bg-white before:rounded-xl before:bottom-[-5px] before:hidden hover:before:block "
                  >
                    {planet.name}
                  </button>
                );
              })}
            </div>
            <h2 className="text-[6rem] mobile:text-[5rem] extraMobile:text-[4rem] specialFont uppercase text-white">
              {name}
            </h2>
            <p className="text-[1.4rem] text-grayText leading-8 mainText">
              {description}
            </p>
            <ul className="flex gap-x-20 gap-y-6 tablet:justify-center tablet:items-center extraMobile:flex-col mt-10 relative before:absolute before:w-full before:h-[2px] before:bg-border before:top-[-20px] ">
              <li className="text-[1.2rem] flex flex-col  text-grayText mainText tracking-[ 2.3625px]">
                AVG. DISTANCE:
                <span className="text-white text-[1.8rem] specialFont uppercase">
                  {distance}
                </span>
              </li>
              <li className="text-[1.2rem] flex flex-col  text-grayText mainText tracking-[ 2.3625px]">
                EST. TRAVEL TIME:
                <span className="text-white text-[1.8rem] specialFont uppercase">
                  {travel}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
