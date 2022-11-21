import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
// Data
import dataCarousel from "./dataCarousel.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-6 xl:mx-16 2xl:mx-16 rounded-md">
      {/* Tên phim */}
      <div clasName="rounded-md">
        <div className="flex flex-row justify-items-center items-center rounded-md">
          {/* icon */}
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="48px"
              height="48px"
            >
              <path
                fill="#FEBF10"
                d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9zM379.5 227.4c-15.5-43.6-57.8-72.5-104-73.1-12.6-.2-25.3 1.2-37.3 5.5-12.8 4.7-24.5 11.7-35.1 20.2-9.6 7.7-18.7 16.6-26.8 25.8-5.2 5.9-11.5 13.6-12.4 21.7-2.4 6.5-2.9 13.5-3.4 20.5-1.7 10-2.9 20.2-3.8 30.3-1.2 13.6-1.5 27.4.9 40.9 2.2 12.5 7.1 25.1 15.7 34.6 10.4 11.3 24.4 18.8 39.1 23 13.8 4 28 5.8 42.3 6.7 13.8.9 27.8 2 41.5 1.4 26.5-1.1 53.5-9.1 71.5-29.7C397.7 321.1 393.7 267.4 379.5 227.4zM253.8 246.7c-4.4 7.8-12 14.5-20.8 16.8-10 2.6-17.7-3.3-21.4-12.4-1.5-3.9 2.2-6.8 5.7-6.6.2 0 .3 0 .5 0 2 .2 3.3 1.9 3.8 3.7 0-.2-.1-.4-.1-.6.6.9.9 1.8.9 2.7 5.5 8.1 16.4.7 21.4-6.4.5-1.9 1.6-3.3 3.9-4.2C251.7 238.1 256 243 253.8 246.7zM312.2 316.4c-2.5 9.5-7.9 21.9-18.7 24.3-11.9 2.6-24.3-3.6-27.9-15.6-1.8-6.2 7.6-9.5 9.4-3.3 2.1 7 10.4 12.2 17.5 8.7 5.7-2.9 8.4-10.2 9.9-16C304 308.3 313.9 310.2 312.2 316.4zM343.2 235.4c-2.7 8.1-6.1 16.8-15 19.5-9.6 2.9-20.1-4.1-23.6-12.8-2.4-6 7-9.3 9.4-3.3 1.7 4.1 8.4 9.1 12.9 5.9 2.2-1.6 3.6-3.9 4.7-6.4-.8-1.6-.8-3.5.9-5.1.7-.7 1.3-1.3 2-2C337.7 228.1 345 230.3 343.2 235.4zM332.4 446.9c-.6-5-5.4-4.4-9.4-3.9-6.2.8-11.8 1.6-18 1.4-7.8-.2-15.6-.5-23.3 0 2.5 6.3 7.1 11.5 11.3 16.6 4.4 5.3 8 11.3 12.3 16.6 2.2 2.6 7.3 9 11 5 4.1-4.5 6.5-11.1 9.2-16.6C328.1 460.8 333.1 453 332.4 446.9zM177.3 130.6c-1.5-1-3.1-1.9-4.6-2.8-8.4-4.6-17.2-9.3-26.7-11.2-4.4-.9-9.7-1.9-14.2-1.2-.6.1-1 .4-1.1.5 0 .3 0 .7 0 1 .7 5 3.7 9.8 6 14.2 4.4 8.5 8.3 22.8 17.2 28.5 1.3-3.8 4-7.4 6.4-10.2 4.2-5 8.7-9.8 13.5-14.2 1.4-1.2 2.8-2.4 4-3.8.1-.1.1-.1.2-.2C177.8 131 177.5 130.8 177.3 130.6zM268.3 68.1c-1.7-3.7-3.5-8.6-6.9-11.1-2.5-1.9-4.9 1.1-6.3 2.9-5.4 7.2-9.3 16.3-11.8 24.9-1.2 4.2-2.6 8.8-2.6 13.2 0 .7 0 1.4.1 2 .6-.3 1.3-.5 2.1-.5 8.6-.1 17.1-1.3 25.6-.9 5.5.3 11.3.8 16.7-.2C279.9 88.2 273.1 78.8 268.3 68.1zM386.6 87.9c-7.8 1.1-15.5 3.4-22.8 6.2-7.8 2.9-16.4 6.2-22.8 11.9 1.6 1.3 3.2 2.8 4.5 3.8 3.1 2.4 6 4.9 9 7.4 4 3.4 8.2 6.8 12 10.4 1.9 1.8 4 3.8 5.4 6.1 2.7-2.1 5.9-3 8.7-5.3 3.3-2.7 4.3-9.5 5-13.4C387.5 106.3 388.4 96.8 386.6 87.9zM119.6 361.5c-2.2-3.2-4.7-6.3-7-9.5-3.1-4.1-6.5-8.7-8.2-13.7-7.5 2.2-10.8 14.4-14.8 20.3-2.9 4.3-5.9 8.5-8.4 13-1.7 3.1-4.1 6.8-3.9 10.4.1 2 4.2 2.4 6.7 2.4 3.9 0 7.9-.4 11.7-1.1 9.9-1.9 17.5-9.4 26.8-13.2 0-.6.1-1.3.3-2C123.5 366.6 120.5 362.7 119.6 361.5zM104.2 228.3c-2.8-4.5-10.1-1.2-13.8.2-5 1.9-9.9 4.3-15 5.9-4.7 1.5-9.7 2.3-14.3 4-1.5.6-3.5 1.2-4.6 2.4 0 .1.1.1.1.2.9 1.4 2 2.8 3.3 3.9 4.2 3.9 38.2 30.1 41 24.6 2.6-5 2.3-11.5 2.8-17 .7-7.5 1.5-15 2.7-22.4C105.5 229.8 104.8 229.2 104.2 228.3zM416.5 415.2c-1-4.6-1-8.6-1-13.3 0-4 .6-9.4-1-13.2.1.2-.2-.1-.6 0-.9.1-1.8.4-2.6.8-6 2.8-10.9 8.6-15 13.5-1.9 2.3-3.8 4.7-5.5 7.2-.4.6-.9 1.3-1.2 2-.1.6-.3 1.1-.5 1.6 4.3 3.9 8.9 7.6 13.8 10.6 5 3.1 10.7 6.3 16.7 7.1C419.1 426 417.6 420.6 416.5 415.2zM445.2 184.3c-6.2.5-16-1.9-21 2.4-.7.6-1.4.9-2.1 1.1 3.4 6 6 12.6 8.5 19 .9 2.3 2.5 5.3 3.3 8.3.6.4 1.2.9 1.6 1.7 1 1.7 3.6 10.3 5.6 10.8-.3-.3 1.5-1.5 1.9-2 .8-.9 1.6-1.9 2.2-2.9 1.2-1.8 2.3-3.7 3.2-5.6 3.2-6.4 8.3-11.9 11.7-18.3 2.7-5.1 4.9-10.2 6.3-15.7C459.6 181.7 451.9 183.8 445.2 184.3zM461.5 309c-2.3.7-4.9.1-5.9-2.1-1.7 9.8-4.6 18.6-8.3 28-.9 2.3-3.8 8.2-2.1 10.6 1.1 1.6 3.3 2.3 5.1 2.7 7.3 1.7 14.9 1.8 22.3 2.3 3.3.2 6.8.4 10.1 1C480.9 335.7 473.5 319.3 461.5 309z"
              />
              <path d="M395.1 80.8c-.7-2.1-2.9-3.5-5.1-3.3-10.5.8-21 4-30.8 7.6-9.4 3.5-19.2 8-26.6 15-1.6 1.5-1.8 3.2-1.1 4.7-1.3 1.5-1.7 3.7-.5 6.1.2.3.4.5.6.8.9.6 1.7 1.2 2.6 1.8 0 0 0 0 0 0 0 0 0 0 0 0 1.6 1.2 3.2 2.4 4.8 3.6 2.6 1.9 5 3.9 7.4 6 3.3 2.9 6.8 5.8 10.1 8.7.9.8 2.3 1.9 3.5 3.1 4.6 3 9.1 6.1 13.3 9.6 1.3.1 2.7-.4 3.7-1.8 3-3.9 8.4-4.9 11.9-8.4 3.8-3.9 5.1-10.9 6.3-16C398.1 106.4 398.8 92.7 395.1 80.8zM385.8 115.1c-.8 3.9-1.7 10.7-5 13.4-2.8 2.3-6 3.2-8.7 5.3-1.4-2.3-3.5-4.3-5.4-6.1-3.8-3.7-8-7-12-10.4-3-2.6-5.9-5.1-9-7.4-1.4-1-2.9-2.5-4.5-3.8 6.3-5.6 15-9 22.8-11.9 7.3-2.7 15-5.1 22.8-6.2C388.4 96.8 387.5 106.3 385.8 115.1zM124.8 356.3c-4.7-6.6-9.4-13.2-13.5-20.2-1.8-2.6-3.6-5.2-5.3-7.9-.4.2-.8.5-1.2.8-.9-.4-2-.5-3.2-.3-11.1 2.4-14.9 16.2-20.4 24.5-5.9 9-14.6 19-13.9 30.4.7 11.3 16 11.2 24 10.4 5.2-.5 10.3-1.5 15-3.7 7.1-3.3 13.2-8.5 20.6-11.2 2.2-.8 3.1-2.5 3.2-4.3.7-.5 1.2-1.2 1.6-2.2.5-1.3.7-2.6.8-3.9C130 364.6 127.6 360.2 124.8 356.3zM122.9 368.3c-.2.7-.4 1.3-.3 2-9.2 3.7-16.9 11.3-26.8 13.2-3.9.7-7.8 1.1-11.7 1.1-2.5 0-6.6-.4-6.7-2.4-.2-3.6 2.2-7.4 3.9-10.4 2.5-4.5 5.5-8.7 8.4-13 4-5.9 7.3-18.1 14.8-20.3 1.7 5 5.1 9.5 8.2 13.7 2.4 3.1 4.8 6.2 7 9.5C120.5 362.7 123.5 366.6 122.9 368.3zM171 115.6c-11.3-5.9-22.4-9.1-35.1-10.1-6.7-.6-14.5 1.6-15.2 9.4-.6 6.8 3.3 13.5 6.3 19.3 6.7 12.9 11.7 30.2 26.1 36.2 4.8-5.6 10.4-10.5 15.7-15.5 2.2-2.6 4.6-5 6.9-7.4 4.3-4.5 12.7-9.5 12.7-16.5C188.6 122.9 176.6 118.5 171 115.6zM177.8 131.4c-1.2 1.4-2.6 2.6-4 3.8-4.8 4.3-9.3 9.2-13.5 14.2-2.4 2.8-5.1 6.4-6.4 10.2-8.9-5.7-12.8-20-17.2-28.5-2.3-4.4-5.4-9.2-6-14.2 0-.3 0-.7 0-1 .2-.1.5-.4 1.1-.5 4.5-.7 9.8.3 14.2 1.2 9.5 1.9 18.2 6.6 26.7 11.2 1.6.9 3.2 1.7 4.6 2.8.2.2.5.4.7.6C177.9 131.3 177.9 131.4 177.8 131.4zM297.1 99.8c-4.1-9-9.7-17.1-14.7-25.6-3-5.2-5.1-10.9-7.9-16.3-2.7-5.2-6.5-9.9-12.3-11.3-5.4-1.3-10.8 2.2-14.1 6.1-7.5 9-12.1 21.1-15.2 32.2-1.8 6.4-3.8 16.5-.2 23.1 7-.7 14.7.5 21.3.8.9 0 1.9.1 2.8.1 4.7-.3 9.4-.4 14.2-.2 7.8.4 15.7.8 23-2.5C296.3 105.2 298.3 102.5 297.1 99.8zM268.6 98.6c-8.6-.4-17.1.8-25.6.9-.8 0-1.5.2-2.1.5 0-.7-.1-1.3-.1-2 0-4.4 1.3-9 2.6-13.2 2.5-8.6 6.4-17.7 11.8-24.9 1.4-1.8 3.7-4.8 6.3-2.9 3.4 2.5 5.2 7.4 6.9 11.1 4.7 10.7 11.6 20.1 17 30.3C279.9 99.5 274.1 98.9 268.6 98.6zM110.3 220c-9.7-9.7-27.9 1.3-38.3 5-9.7 3.4-33.4 6.6-23.3 22.5 2.6 4.1 6.9 7.3 10.7 10.1 5.1 3.7 10.2 7.4 15.4 11 7.7 5.4 18.3 14.2 28.4 11.1 7.3-2.2 8.7-11.6 9.4-18 1.3-12.2 2.2-24.4 4.5-36.4C118.1 221 113.6 218.8 110.3 220zM103.6 252.6c-.5 5.5-.3 12-2.8 17-2.8 5.5-36.8-20.7-41-24.6-1.3-1.2-2.3-2.5-3.3-3.9 0-.1-.1-.1-.1-.2 1.1-1.3 3.1-1.9 4.6-2.4 4.7-1.7 9.6-2.5 14.3-4 5.1-1.7 10-4 15-5.9 3.8-1.4 11.1-4.7 13.8-.2.6.9 1.3 1.5 2.1 1.9C105.1 237.6 104.3 245.1 103.6 252.6zM481.6 318.2c-3.4-6-7.8-11.6-12.9-16.3-2.2-2-5.7-5.5-9-4.2-1.9.8-3 1.9-3.6 3.3-1.4-4.4-8.8-5.1-9.6.5-.9 6.4-2 12.8-4 19-1.7 5.2-4.3 10-6 15.2-2.5 8-1.8 15.8 6 20.1 6.6 3.7 15.4 3.7 22.8 4.1 6.5.4 15-.2 20.9 3 3.5 2 7.3-1.3 7.2-4.9C493.2 344.1 488.5 330.3 481.6 318.2zM472.7 350.4c-7.5-.5-15-.6-22.3-2.3-1.8-.4-4-1.1-5.1-2.7-1.7-2.4 1.2-8.3 2.1-10.6 3.7-9.3 6.6-18.2 8.3-28 .9 2.2 3.6 2.9 5.9 2.1 11.9 10.3 19.3 26.7 21.3 42.4C479.5 350.8 476 350.7 472.7 350.4zM474.6 175c-9.8-3.9-20-1.7-30.2-.7-8.4.8-18.8-1.9-25.9 4.1-2 1.7-2.2 4.1-1.5 6.1-3.1.5-6 4.2-3.9 7.8 2.5 4.3 4.3 9.1 6.3 13.7 1.1 2.5 2.1 5 3.1 7.6.7 1.3 1.3 2.6 2 3.9.1-.2.2-.3.3-.5-.1.3-.1.6-.1.8.8 1.7 1.6 3.4 2.4 5.2.3.2.5.3.8.4 2.7 5 3.9 10.3 9.4 13.2 6.3 3.4 12.3-2.9 15.6-7.5 4.5-6.3 8.6-13.2 12.7-19.8 5.5-8.8 10-18.5 11.7-28.9C477.6 178.4 476.7 175.8 474.6 175zM460.2 198.7c-3.4 6.4-8.4 11.9-11.7 18.3-1 1.9-2.1 3.8-3.2 5.6-.7 1-1.4 2-2.2 2.9-.5.6-2.3 1.8-1.9 2-2.1-.6-4.6-9.2-5.6-10.8-.5-.8-1-1.3-1.6-1.7-.7-3-2.3-6-3.3-8.3-2.6-6.4-5.2-13-8.5-19 .7-.1 1.4-.5 2.1-1.1 5.1-4.3 14.8-1.9 21-2.4 6.8-.5 14.4-2.6 21.3-1.3C465.1 188.5 462.9 193.6 460.2 198.7zM426.5 414.8c-1.4-6.3-.9-12.2-1.1-18.6-.1-4.9-.4-11.4-4.3-14.9-3.1-2.9-7.4-2.9-11.3-2-8.3 2-15.3 10.2-20.6 16.4-2.6 3-9.4 9.7-9.9 14.9-2 1.8-2.8 5.1-.3 7.6 11.3 11.2 28.7 25.1 45.7 23.2 2-.2 4.4-1.8 4.5-4C429.8 429.6 428.3 422.4 426.5 414.8zM402.7 424.4c-4.9-3-9.6-6.7-13.8-10.6.3-.5.5-1 .5-1.6.4-.7.8-1.4 1.2-2 1.7-2.5 3.6-4.8 5.5-7.2 4.1-5 9.1-10.7 15-13.5.8-.4 1.7-.7 2.6-.8.4 0 .7.2.6 0 1.7 3.8 1.1 9.2 1 13.2-.1 4.6 0 8.7 1 13.3 1.1 5.4 2.7 10.7 3 16.2C413.5 430.7 407.8 427.5 402.7 424.4zM331.7 433.2c-6-1.7-12.8.3-18.8 1.2-5.3.7-11.1-.1-16.4-.2-5.8-.2-11.7-.1-17.5.4-3.3.3-4.7 3-4.4 5.5-2.2.9-3.9 3.2-2.9 6.1 2.9 8.8 9.3 15.9 15.1 22.9 5.3 6.5 9.3 14 15.4 19.8 4.8 4.4 12 6.9 17.9 3.3 7.1-4.3 10-13.2 13.6-20.3C339.5 460.7 350.2 438.4 331.7 433.2zM325.5 466c-2.7 5.5-5.1 12.1-9.2 16.6-3.7 4-8.8-2.3-11-5-4.4-5.4-7.9-11.3-12.3-16.6-4.2-5.1-8.8-10.4-11.3-16.6 7.8-.5 15.6-.2 23.3 0 6.3.2 11.9-.6 18-1.4 4-.5 8.8-1.1 9.4 3.9C333.1 453 328.1 460.8 325.5 466zM223.3 434.6c-1.2-4.9-6.6-8.2-10.7-10.5-5.1-3-10.8-5.1-16.3-7.3-7-2.9-12.9-7.7-19.8-10.7-1.4-.6-2.7-.6-3.8-.1-2.2-1-4.8-.5-6 2.4-4.4 11.6-4 22.5-3.3 34.7.7 12.5-.7 25 3.1 37.2.8 2.6 3.9 3.9 6.4 3.1 9-3.1 17.6-8 25.6-13.2 8.9-5.7 18.3-12.9 23.2-22.5C223.9 443.4 224.3 439 223.3 434.6zM212 444.7c-4.5 7.9-13.5 13.6-21 18.3-5.1 3.3-10.6 6.3-16.2 8.8-1.6-8.7-1.1-17.7-1.2-26.4-.2-10.1-1.6-19.5 1.1-29.1 4.8 2.5 9.2 5.7 14 8.1 4.2 2 8.6 3.5 12.8 5.4 4 1.8 9.1 3.7 11.9 7.3C215.1 439.1 213.1 442.7 212 444.7zM247.7 239.8c-2.3 1-3.4 2.3-3.9 4.2-5 7-15.9 14.4-21.4 6.4 0-.9-.3-1.8-.9-2.7 0 .2.1.4.1.6-.5-1.8-1.9-3.5-3.8-3.7-.2 0-.3 0-.5 0-3.5-.3-7.2 2.7-5.7 6.6 3.6 9.1 11.3 14.9 21.4 12.4 8.8-2.2 16.4-9 20.8-16.8C256 243 251.7 238.1 247.7 239.8zM334.6 231.2c-.7.7-1.3 1.3-2 2-1.7 1.7-1.7 3.6-.9 5.1-1.1 2.5-2.5 4.9-4.7 6.4-4.5 3.2-11.2-1.8-12.9-5.9-2.4-6-11.9-2.7-9.4 3.3 3.5 8.8 14 15.8 23.6 12.8 8.9-2.7 12.3-11.5 15-19.5C345 230.3 337.7 228.1 334.6 231.2zM302.4 314.5c-1.5 5.8-4.2 13.1-9.9 16-7.1 3.5-15.4-1.7-17.5-8.7-1.8-6.2-11.3-2.9-9.4 3.3 3.6 12 16 18.2 27.9 15.6 10.8-2.4 16.2-14.8 18.7-24.3C313.9 310.2 304 308.3 302.4 314.5z" />
              <path d="M392.5,235.8c-6.1-22.2-16.7-41.9-33.4-57.9c-30.1-29-76.3-40.2-116.5-29.9c-23.9,6.1-44.5,21.6-61.6,38.7c-11.4,11.3-28.4,27.2-27.1,44.7c-0.2,0.4-0.3,0.7-0.4,1.2c-4.8,21.2-7.4,43.8-7.5,65.5c0,19.9,3.9,40.3,15.5,56.8c14,19.8,37.8,29.9,60.8,34.7c13.8,2.9,28,3.8,42,4.4c13.7,0.7,27.3,1.5,41,0.4c26-2.2,51.1-12.2,69.1-31.5c15.2-16.3,22.6-38.3,24.8-60.1C401.5,280.2,398.4,257.5,392.5,235.8z M367.8,355.2c-18,20.6-45,28.6-71.5,29.7c-13.8,0.6-27.8-0.5-41.5-1.4c-14.3-0.9-28.5-2.7-42.3-6.7c-14.7-4.2-28.7-11.7-39.1-23c-8.7-9.5-13.5-22.1-15.7-34.6c-2.4-13.5-2.1-27.3-0.9-40.9c0.9-10,2.1-20.2,3.8-30.3c0.5-7,1-14,3.4-20.5c0.9-8.1,7.2-15.8,12.4-21.7c8.1-9.3,17.2-18.1,26.8-25.8c10.6-8.5,22.3-15.6,35.1-20.2c11.9-4.4,24.6-5.7,37.3-5.5c46.1,0.6,88.5,29.4,104,73.1C393.7,267.4,397.7,321.1,367.8,355.2z" />
            </svg>
          </div>

          <a className="flex" href="...">
            {/* tên phim */}
            <div className="mr-2">
              <p className="text-3xl leading-8 font-bold text-slate-700">
                Doraemon S9
              </p>
            </div>
          </a>

          {/* > */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* <> */}
      {/* {false && ( */}
        <section className="pb-1 px-20">
          <div class="flex justify-end flex-row p">
            {/* < */}
            <div class="flex items-center">
              <div class="text-right">
                <button
                  onClick={movePrev}
                  className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                  disabled={isDisabled("prev")}
                  class="p-1 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <span className="sr-only">Prev</span>
                </button>
              </div>
            </div>
            {/* > */}
            <div class="flex items-center">
              <div class="text-right">
                <button
                  onClick={moveNext}
                  className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                  disabled={isDisabled("next")}
                  class="p-1 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <span className="sr-only">Next</span>
              </div>
            </div>
          </div>
        </section>
      {/* )} */}

      {/* carousel */}
      <div className="relative overflow-hidden rounded-md pt-2">
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 rounded-md"
        >
          {dataCarousel.resources.map((resource, index) => {
            return (
              <div className="px-2 pb-20 text-black rounded-md">
                <div
                  key={index}
                  className="carousel-item text-start relative w-64 h-32 snap-start rounded-md"
                >
                  <Link
                    to={resource.to}
                    className="scale-100 hover:scale-105 ease-in duration-100 h-32 w-64 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-md"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="aspect-square hidden rounded-md"
                    />
                  </Link>
                  <Link
                    to={resource.to}
                    className="aspect-square block absolute transition-opacity z-10"
                  >
                    <h3 className="pt-2 w-64 mx-auto text-xl font-bold truncate">
                      {resource.title}
                    </h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
