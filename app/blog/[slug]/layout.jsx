import Link from "next/link";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const LayoutBlog = ({ children }) => {
  return (
    <div className="flex items-start justify-between container mx-auto">
      <main className="w-[70%]">{children}</main>
      <aside className="w-80 max-w-80 p-2 rounded-md  flex flex-col gap-12">
        <form className="border-zinc-700 border-2 p-2 rounded-md flex justify-between items-center">
          <input
            type="text"
            className="bg-transparent outline-none p-2 focus:border-collapse focus:border-blue-300 text-sm"
            placeholder="جستجو در وبلاگ ...."
          />
          <BiSearchAlt className="w-8 h-8" />
        </form>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3>توضیحات خلاصه</h3>
          <p className="leading-8 text-base text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است{" "}
          </p>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3 className="text-blue-500">پربازدیدترین مقالات</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                className="p-2 flex justify-center items-center text-base  border-r-2 border-zinc-400 line-clamp-1"
                href={"/"}
              >
                {" "}
                مقاله تست مقاله تست مقاله تست مقاله تستی{" "}
              </Link>
            </li>
            <li>
              <Link
                className="p-2 flex justify-center items-center text-base  border-r-2 border-zinc-400 line-clamp-1"
                href={"/"}
              >
                {" "}
                مقاله تست مقاله تست مقاله تست مقاله تستی{" "}
              </Link>
            </li>
            <li>
              <Link
                className="p-2 flex justify-center items-center text-base  border-r-2 border-zinc-400 line-clamp-1"
                href={"/"}
              >
                {" "}
                مقاله تست مقاله تست مقاله تست مقاله تستی{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ga-6 rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.35)] p-3">
          <h3 className="text-blue-500">شرکت در خبرنامه</h3>
          <form className="border-zinc-700 border-2 p-2 rounded-md flex justify-between items-center mt-4">
            <input
              type="text"
              className="bg-transparent outline-none p-2 focus:border-collapse focus:border-blue-300 text-sm"
              placeholder="جستجو در خبرنامه ...."
            />
            <BiSearchAlt className="w-8 h-8" />
          </form>
        </div>
      </aside>
    </div>
  );
};

export default LayoutBlog;
