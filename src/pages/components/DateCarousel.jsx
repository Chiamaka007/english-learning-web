import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TextButton from "./TextButton";

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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const month = months[now.getMonth()];
  // Get the current date and set it to the start of the week

  return (
    <>
      <div
        className={`carousel-button-group  absolute top-0 mt-10 flex-1 items-center  `}
      >
        <div className=" relative flex  gap-[120px] lg:gap-[570px] items-center w-full ">
          <button
            className="border border-[#b5b9d6] rounded-lg"
            onClick={previous}
          >
            <Icon
              icon="ic:round-keyboard-arrow-left"
              color={"#b5b9d6"}
              width={20}
            />
          </button>
          <p className="font-bold">{month}</p>
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
const DateCarousel = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the current date and set it to the start of the week
  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  console.log(currentDate.getHours());

  const currentDay = new Date();
  console.log(currentDay.getHours());
  console.log(currentDay.getMinutes());
  // const nowDay = date.getDate();
  // console.log(nowDay);
  currentDay.setDate(currentDay.getDate() - currentDay.getDay());

  // An array to hold the dates to display on the calendar
  const dates = [];
  const hours = [];

  // Add the next 6 days to the dates array
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate);

    date.setDate(date.getDate() + i);

    dates.push(date);
  }

  for (let i = 0; i < 5; i++) {
    var hour = new Date(currentDate);

    hour.setHours(hour.getHours() + i);

    hours.push(hour);
  }

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
      <div className="flex justify-between mt-20 gap-3 lg:gap-40">
        {dates.map((date, index) => {
          const today = new Date(date);

          const isToday = today.getDate() == currentDate.getDate();

          return (
            <>
              <div key={index}>
                <div>
                  <TextButton
                    oldText={
                      <button
                        className={`${
                          isToday
                            ? "rounded-full p-3 px-5 text-white  bg-[#ff9665] "
                            : "rounded-full p-3 px-5 bg-white text-blue-900"
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    }
                    newText={
                      <Icon icon="mdi:tick-circle" width={50} color="#6473BB" />
                    }
                  />
                </div>

                <p>
                  {" "}
                  <p className={`${isToday ? "text-[#ff9665]" : ""}`}>
                    {days[date.getDay()]}
                  </p>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </Carousel>
  );
};

export default DateCarousel;
