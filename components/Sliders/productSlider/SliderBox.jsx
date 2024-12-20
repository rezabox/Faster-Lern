import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiPriceTagLine } from "react-icons/ri";


const SliderBox1 = () => {
  return (
    <article className="sliderItem p-4 hover:mt-[-20px] transition-all duration-500">
      <div className="relative h-[22rem] w-73  bg-white rounded-md cursor-pointer">
        <div>
          <Image
            width={350}
            height={140}
            src={"/images/ganj.jpg"}
            alt="alt"
          />
        </div>
        <div>
          <h3 className="m-2 line-clamp-2">عنوان این محصول این است که کتاب گنج زندگی اثری از ولیام چو است </h3>
          <div className="categories flex items-center justify-start flex-wrap gap-3 p-2">
            <Link href={'/'}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
            <Link href={'/'}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
            <Link href={'/'}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
          </div>
          <div className="absolute bottom-2 w-full  flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
            <RiPriceTagLine className="mr-1 w-10 h-10 p-2 rounded text-indigo-600 hover:text-white bg-zinc-100 transition-all duration-300 hover:bg-orange-300 cursor-pointer" />
            <AiOutlineFileSearch className="mr-1 w-10 h-10 p-2 rounded text-indigo-600 hover:text-white bg-zinc-100 transition-all duration-300 hover:bg-orange-300 cursor-pointer"/>
            </div>
           
            <div className="flex gap-2 justify-start items-center">
            <HiShoppingCart className="mr-1 w-10 h-10 p-2 rounded text-indigo-600 hover:text-white bg-zinc-100 transition-all duration-300 hover:bg-orange-300 cursor-pointer" />
            <div className="bg-zinc-500 text-white p-2 rounded-tr-md rounded-br-md">
              5000 تومان
            </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SliderBox1;
