"use client";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import BlogDetail from "./BlogDetail";


const BlogSlider = ({title}) => {
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
    <main className="mb-[30px] mt-5 p-5">
      <div className="container mx-auto py-8">
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center ">
            <div className="flex items-center justify-between gap-5">
              <h2 className="text-xl">{title}</h2>
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
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full  overflow-x-hidden "
          >
            <div className="flex justify-between items-center gap-4 w-[1000px]">
              <BlogDetail />
              <BlogDetail />
              <BlogDetail />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default BlogSlider;
