"use client";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import SliderGraphic1 from "./SliderGraph";


const GraphicSlider = ({title, linkComp}) => {
  const carouselRef = useRef();
  const caroselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };

  return (
    <main className="bg-yellow-500 mb-[30px] mt-5 md:p-5  p-10">
      <div className="relatives container mx-auto py-8">
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center ">
            <h2 className="font-semibold text-2xl border-r-white pr-1 text-black">
              فایل های گرافیکی
            </h2>
            <div className="absolute mt-[100%]  md:mt-[30%]  left-0 right-0 flex justify-between items-center transform -translate-y-1/2 sm:left-[-14px] sm:right-[-14px] lg:left-0 lg:right-0">
                <FaChevronRight
                  onClick={() => caroselSwitcher(1)}
                  className="cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-3  rounded"
                />
                <FaChevronLeft
                  onClick={() => caroselSwitcher(-1)}
                  className="cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-3  rounded"
                />
              </div>
            <div className="flex items-center justify-between gap-5">   
              <Link href={'/'} className="bg-indigo-500 border-white border-2 px-4 py-2 rounded-md transition-all duration-500 text-white hover:bg-indigo-300 hover:text-black">مشاهده همه </Link>
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full  overflow-x-hidden "
          >
            <div className="flex justify-between items-center gap-4 w-[4000px]">
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
              <SliderGraphic1 /> 
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default GraphicSlider;
