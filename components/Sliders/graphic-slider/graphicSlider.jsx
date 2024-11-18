"use client";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import SliderGraphic from "./SliderGraph";



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
    <main className="bg-indigo-500 mb-[30px] mt-5 p-5">
      <div className="container mx-auto py-8">
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center ">
            <h2 className="font-semibold text-2xl border-r-white pr-1 text-white">
              فایل های گرافیکی
            </h2>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-1 text-zinc-500">
                <FaChevronRight
                  onClick={() => caroselSwitcher(1)}
                  className="cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-3 rounded"
                />
                <FaChevronLeft
                  onClick={() => caroselSwitcher(-1)}
                  className="cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-3 rounded"
                />
              </div>
              <Link href={'/'} className="bg-orange-500 border-white border-2 px-4 py-2 rounded-md transition-all duration-500 text-white hover:bg-orange-400">مشاهده همه </Link>
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full  overflow-x-hidden "
          >
            <div className="flex justify-between items-center gap-4 w-[4000px]">
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
              <SliderGraphic /> 
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default GraphicSlider;
