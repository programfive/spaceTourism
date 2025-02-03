import { useState } from "react";
import { crew } from "../json/data.json";

export function Crew() {
  const [persons] = useState(crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = persons[value];
  return (
    <div className="w-full min-h-screen tablet:h-auto bg-crewDesktop tablet:bg-crewTablet mobile:bg-crewMobile  bg-no-repeat bg-cover bg-center flex justify-center items-end ">
      <div className=" w-full max-w-[1200px] mt-40">
        <div className="font-normal mainText text-center  gap-x-4  tracking-[4.725px]  flex text-2xl text-white p-6 mobile:justify-center mobile::items-center">
          <span className="font-bold mobile:hidden">02</span>
          <h2>MEET YOUR CREW</h2>
        </div>
        <section className="   w-[90%] m-auto flex justify-between items-center tablet:flex-col mobile:flex-col-reverse ">
          <div className="w-full flex max-w-[520px] flex-col  p-5">
            <div className="tablet:text-center">
              <p className="text-[1.6rem] extraMobile:text-[1.4rem] uppercase specialFont text-grayText opacity-[.5]">
                {role}
              </p>
              <h2 className="text-[2.4rem] extraMobile:text-[1.6rem] specialFont  uppercase text-white ">
                {name}
              </h2>
              <p className="text-[1.4rem] text-grayText leading-8 mainText">
                {bio}
              </p>
            </div>
            <div className="flex gap-5 pt-8 pb-8 tablet:justify-center items-center">
              {persons.map((person, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setValue(index)}
                    className="bg-grayText w-4 h-4 rounded-full hover:scale-[1.4] hover:bg-white "
                  ></button>
                );
              })}
            </div>
          </div>

          <div className=" max-w-[520px] w-full extraMobile:p-2 flex flex-col justify-center items-center">
            <img
              src={images.png}
              alt={name}
              className="object-contain extraMobile:object-cover h-[550px]  extraMobile:h-[280px] "
            />
            <div className="bg-grayText w-full h-[2px] hidden mobile:block "></div>
          </div>
        </section>
      </div>
    </div>
  );
}
