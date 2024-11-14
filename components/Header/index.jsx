"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Header = () => {
  const [logoHover, setLogoHover] = useState(0);

  return (
    <header className="container mx-auto py-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col relative h-52">
          <Link
            href={"/"}
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            className="z-30 bg-blue-300  logo p-4 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col items-center justify-center"
          >
            <Image
              src={"/logonomy-1731429789311.jpeg"}
              className="rounded-lg"
              objectFit="cover"
              layout="fixed"
              width={100}
              height={100}
              alt="faster lern"
            />
            <div>فروشگاه فسترلرن</div>
          </Link>
          <div
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            className={
              logoHover == 0
                ? " absolute z-20 bottom-20 right-0 left-0 flex items-center justify-around p-2 text-indigo-500 rounded-br-md rounded-bl-md transition-all duration-500"
                : " absolute z-20 bottom-0 right-0 left-0 flex items-center justify-around p-2 text-indigo-500 rounded-br-md rounded-bl-md transition-all duration-500"
            }
          >
            <AiFillTwitterCircle className="text-[1.7rem] transition-all duration-300 hover:text-orange-300 cursor-pointer" />
            <AiOutlineYoutube className=" text-[1.7rem] transition-all duration-300 hover:text-orange-300 cursor-pointer" />
            <BsTelegram className="text-[1.5rem] transition-all duration-300 hover:text-orange-300 cursor-pointer" />
          </div>
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <div className="flex justify-between items-center w-full">
            <nav>
              <ul className="flex items-center justify-between space-x-reverse space-x-5">
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-300 hover:text-white"
                  >
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-300 hover:text-white"
                  >
                    اپلیکیشن ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-300 hover:text-white"
                  >
                    کتاب ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-300 hover:text-white"
                  >
                    فایل های گرافیکی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-300 hover:text-white"
                  >
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center  gap-3">
                <div>09110000000</div>
                <div className="rotate-12 rounded bg-zinc-200 p-2">
                  <BsTelephone className="w-4 h-4 -rotate-12" />
                </div>
              </div>
              <div className="flex items-center  gap-3">
                <div>reza.asareh81@gmail.com</div>
                <div className="rotate-12 rounded bg-zinc-200 p-2">
                  <MdEmail className="w-4 h-4 -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
