import React from "react";
import DateCarousel from "./components/DateCarousel";
import { Icon } from "@iconify/react";

const stats = () => {
  return (
    <div className="bg-[#F6F8FE] h-screen relative p-5 overflow-y-scroll font-poppins">
      <DateCarousel />

      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Skills</p>
          <Icon icon="ph:dots-three-bold" color="#6672BD" />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="bg-white rounded-xl p-5">
            <div className="">
              <span className="flex justify-center ">
                <p className="bg-[#6672BB] p-3 w-[50px] rounded-full">
                  <Icon
                    icon="fluent-mdl2:reading-mode"
                    width={25}
                    color="white"
                  />
                </p>
              </span>
              <p className="text-center mt-4 font-bold lg:text-lg">Reading</p>
              <p className="text-center text-sm lg:text-base mt-3">100%</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="px-5 py-1 text-white rounded-full bg-[#FE9665]">
                Completed
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5">
            <div className="">
              <span className="flex justify-center ">
                <p className="bg-[#6672BB] p-3 w-[50px] rounded-full">
                  <Icon
                    icon="fluent:notepad-edit-16-regular"
                    width={25}
                    color="white"
                  />
                </p>
              </span>
              <p className="text-center mt-4 font-bold lg:text-lg">Writing</p>
              <p className="text-center text-sm lg:text-base mt-3">85%</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="px-5 py-1 text-[#FE9665] rounded-full border border-[#FE9665]">
                Good Work
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5">
            <div className="">
              <span className="flex justify-center ">
                <p className="bg-[#6672BB] p-3 w-[50px] rounded-full">
                  <Icon
                    icon="ph:speaker-simple-high-bold"
                    width={25}
                    color="white"
                  />
                </p>
              </span>
              <p className="text-center mt-4 font-bold lg:text-lg">Speaking</p>
              <p className="text-center text-sm lg:text-base mt-3">100%</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="px-5 py-1 text-white rounded-full bg-[#FE9665]">
                Completed
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5">
            <div className="">
              <span className="flex justify-center ">
                <p className="bg-[#6672BB] p-3 w-[50px] rounded-full">
                  <Icon
                    icon="solar:headphones-round-linear"
                    width={25}
                    color="white"
                  />
                </p>
              </span>
              <p className="text-center mt-4 font-bold lg:text-lg">Listening</p>
              <p className="text-center text-sm lg:text-base mt-3">70%</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="px-5 py-1 text-[#FE9665] rounded-full border border-[#FE9665]">
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
