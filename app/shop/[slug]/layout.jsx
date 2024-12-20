import Link from "next/link";
import React from "react";
import { IoSendOutline } from "react-icons/io5";

const LayoutBlog = ({ children }) => {
  return (
    <div className="flex items-start justify-between container mx-auto gap-4">
      <main className="w-[70%]">{children}</main>
      <aside className="w-80 max-w-80 p-2 rounded-md  flex flex-col gap-12">
        <div className="flex flex-col gap-4">
           <button className="flex items-center justify-center rounded-md p-2 w-full text-center bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white">افزودن به سبد خرید30,000 هزار تومان</button>
           <button className="flex items-center justify-center rounded-md p-2 w-full text-center bg-blue-500 transition-all duration-300 hover:bg-blue-600 text-white">افزودن به علاقه مندی ها </button>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between">
               <span>تعداد خرید</span>
               <span>12</span>
            </li>   
            <li className="flex items-center justify-between">
               <span>تعداد بازدید</span>
               <span>82</span>
            </li> 
            <li className="flex items-center justify-between">
               <span>تعداد دیدگاه</span>
               <span>22</span>
            </li> 
          </ul>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3>توضیحات خلاصه</h3>
          <p className="leading-8 text-base text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است{" "}
          </p>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3>معرفی کوتاه</h3>
          <p className="leading-10 text-justify text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها 
            {" "}
          </p>
        </div> 
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3 className="text-blue-500">برچسب ها</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap mt-5">
              <Link
                className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                href={"/"}
              >
                {" "}
                مقاله {" "}
              </Link>
              <Link
                className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                href={"/"}
              >
                {" "}
                مقاله{" "}
              </Link>
              <Link
                className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                href={"/"}
              >
                {" "}
                مقاله{" "}
              </Link>
            </div>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3 className="text-blue-500">شرکت در خبرنامه</h3>
          <form className="border-zinc-700 border-2 p-2 rounded-md flex justify-between items-center mt-4">
            <input
              type="text"
              className="bg-transparent outline-none p-2 focus:border-collapse focus:border-blue-300 text-sm"
              placeholder="جستجو در خبرنامه ...."
            />
            <IoSendOutline className="w-8 h-8 rotate-180 cursor-pointer" />
          </form>
        </div>
      </aside>
    </div>
  );
};

export default LayoutBlog;
