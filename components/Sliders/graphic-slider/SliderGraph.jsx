import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiPriceTagLine } from "react-icons/ri";
import { RiBrushFill } from "react-icons/ri";
import { MdFileCopy } from "react-icons/md";
import { IoMdResize } from "react-icons/io";

const SliderGraphic1 = () => {
  return (
    <article className="sliderItem p-1 hover:mt-[-20px] transition-all duration-500">
      <div className="relative h-[30rem] w-73 bg-zinc-200 rounded-md cursor-pointer">
        <Link href={"/shop"}>
          <Image
            width={350}
            height={140}
            src={"/images/2019-8-4af22eea-4f8b-4ccf-b007-81d0c513ae84-638bab29c15792b1de48b0a9.jpg"}
            alt="alt"
          />
        </Link>
        <div>
          <Link href={"/shop"}>
            <h3 className="m-2 line-clamp-1">
                   قالب فروشگاه فایل وردپرسی المنتور مناسب برای همه کس 
            </h3>
          </Link>
          <div className="flex flex-col gap-3 text-zinc-500 text-base sm:text-sm">
            <div className="flex items-center justify-between p-2">
              <div className="flex justify-start items-center gap-2">
                <RiBrushFill className="w-5 h-5" />
                <div>فرمت</div>
              </div>
              <div className="gap-2">PSD</div>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex justify-start items-center gap-2">
                <IoMdResize className="w-5 h-5" />
                <div>اندازه</div>
              </div>
              <div>
                <span>100</span>*<span>200</span>پیکسل
              </div>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex justify-start items-center gap-2">
                <MdFileCopy className="w-5 h-5" />
                <div>حجم فایل</div>
              </div>
              <div>20 مگ</div>
            </div>
          </div>
          <div className="categories flex items-center justify-start flex-wrap gap-3 p-2">
            <Link href={"/"}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
            <Link href={"/"}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
            <Link href={"/"}>
              <div className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                رمان
              </div>
            </Link>
          </div>
          <div className="absolute bottom-2 w-full  flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <RiPriceTagLine className="mr-1 w-10 h-10 p-2 rounded text-indigo-600 hover:text-white bg-zinc-100 transition-all duration-300 hover:bg-orange-300 cursor-pointer" />
              <AiOutlineFileSearch className="mr-1 w-10 h-10 p-2 rounded text-indigo-600 hover:text-white bg-zinc-100 transition-all duration-300 hover:bg-orange-300 cursor-pointer" />
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
export default SliderGraphic1;
