import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <>
      <div
        className={`carousel-button-group mt-16 absolute top-60 right-5 flex items-center `}
      >
        <div className="flex  gap-60 items-center ">
          {/* <button className="" onClick={previous}>
        <Icon
          icon="ic:round-keyboard-arrow-left"
          width={40}
          color={"#440544"}
        />
      </button> */}
          <p className="font-bold">Your Lesson</p>
          <button
            className=" border border-[#b5b9d6] rounded-lg"
            onClick={next}
          >
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              color={"#b5b9d6"}
              width={20}
            />
          </button>
        </div>
      </div>
    </>
  );
};

// <Icon icon="material-symbols:keyboard-arrow-right" />
{
  /* <Icon icon="material-symbols:keyboard-arrow-right" /> */
}
const LessonCarousel = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
      infinite={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass=" pb-10"
      arrows={false}
      swipeable={true}
      draggable={true}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      {RecentSearches.map((i, idx) => (
        <div className="  mx-2 p-3 py-3  mt-20 " key={idx}>
          <div className="bg-white p-5 px-7 rounded-2xl">
            <Image
              src={i.img}
              alt=""
              className="h-[50px] lg-h-full w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex gap-1 items-center mt-3">
            <div class="w-full  rounded-full h-2.5 bg-[#C8CEED]">
              <div
                class="bg-[#6573BC] h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p>60%</p>
          </div>
          <div>
            <p className="font-bold">{i.name}</p>
            <p className="text-sm opacity-40"> {i.title}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const RecentSearches = [
  {
    id: 1,
    name: "Speaking 101",
    title: "30 days.daily",
    img: "/Images/naijflag.jpg",
  },
  {
    id: 2,
    name: "New words daily",
    title: "40 days.daily",
    img: "/Images/americanflag.jpg",
  },
  {
    id: 3,
    name: "Speaking 102",
    title: "50 days.daily",
    img: "/Images/images.jpg",
  },
  {
    id: 4,
    name: "New words daily",
    title: "30 days.daily",
    img: "/Images/naijflag.jpg",
  },
  {
    id: 5,
    name: "Speaking 102",
    title: "90 days.daily",
    img: "/Images/americanflag.jpg",
  },
];
export default LessonCarousel;
