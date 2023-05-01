import Image from "next/image";
import { Inter } from "next/font/google";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Icon } from "@iconify/react";
import LessonCarousel from "./components/LessonCarousel";

export default function Home() {
  const percentage = 70;
  return (
    <main className="bg-[#F6F8FE] h-full p-5 font-poppins overflow-y-scroll">
      <div className=" flex justify-between">
        <div>
          <p>Hello Racheal</p>
          <p className="">
            {" "}
            <b className="text-lg text-[#6C749C]"> Ready to</b>{" "}
            <b className="text-lg text-[#FFBD9D]">Play English?</b>
          </p>
        </div>
        <div className="flex items-center bg-white rounded-full px-3 p-0 gap-1">
          <Icon icon="mdi:fire" width={25} color="#F1976D" />
          <p>65</p>
        </div>
      </div>
      <div className="border-4 border-[#8792C9] bg-white mt-5 rounded-3xl px-6 py-3">
        <p className="text-[#6C749C]">Todays goal</p>
        <div className="flex items-center gap-5 mt-2">
          <div className="w-1/3">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `rgb(255, 150, 102)`,
                textColor: "#000",
                trailColor: "#FFD3BE",
              })}
            />
          </div>
          <div className="w-2/3">
            <p className="text-lg font-bold ">Excellent!</p>
            <p className="text-sm">
              You are almost there. Finish the goal to achieve
            </p>
            <span className="flex items-center gap-1 text-[#F1976D]">
              <Icon icon="mdi:fire" width={20} />
              <p>10</p>
            </span>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <LessonCarousel />
      </div>
      <div className="mt-5 pb-10">
        <span className="flex justify-between">
          <p className="font-bold">Leaderboard</p>
          <button className=" border border-[#b5b9d6] rounded-lg">
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              color={"#b5b9d6"}
              width={20}
            />
          </button>
        </span>
        <div className="overflow-y-scroll">
          {data.map((i, idx) => (
            <div
              key={idx}
              className="flex bg-white items-center justify-between  p-3 rounded-2xl mx-4 mt-5"
            >
              <div className="flex gap-3 items-center">
                <Image
                  src={i.img}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <span>
                  <p className="text-sm">{i.name}</p>{" "}
                  <p className="text-xs">{i.ethnicity}</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:arrow-up-thin" />
                <span className="flex gap-1 items-center">
                  <Icon icon="mdi:fire" color="#F1976D" />
                  <p className="text-sm text-[#F1976D]">{i.number}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const data = [
  {
    img: "/images/avatar1.jpg",
    name: "Yasmin Lee",
    ethnicity: "Taiwan",
    number: 1234,
  },
  {
    img: "/images/avatar2.jpg",
    name: "Guy Hawkins",
    ethnicity: "Spain",
    number: 1120,
  },
  {
    img: "/images/avatar3.jpg",
    name: "John Doe",
    ethnicity: "Spain",
    number: 960,
  },
];
