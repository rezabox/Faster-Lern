"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUp } from "react-icons/hi";
import { TfiAngleLeft } from "react-icons/tfi";

const Footer = () => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto flex flex-col gap-8 py-6">
      <div className="md:flex justify-around items-center p-8 bg-zinc-200 rounded-lg">
        <div>
          <div className="flex justify-center">
            <Image
              src={"/logonomy-1731429789311.jpeg"}
              className="bg-blue-300  logo p-1 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col items-center justify-center"
              width={100}
              height={100}
              alt="faster lern"
            />
          </div>
          <p className="text-center">سایت فستر لرن در حوزه کسب و کار آنلاین فعالیت می کند .</p>
        </div>
        <div className="md:flex lg:w-[50%] md:w-[100%] justify-between  items-center m-auto text-center space-y-5 md:m-none md:text-none md:space-y-0">
          <div className="md:flex lg:gap-20 md:gap-10 p-5">
          <div className="flex flex-col gap-6">
            <div className="text-lg">دسترسی سریع</div>
            <ul className="space-y-3">
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>درباره ما</span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>تماس با ما</span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>حریم خصوصی </span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>وبلاگ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-lg">راهنمای خرید</div>
            <ul  className="space-y-3">
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span> سوالات متداول</span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>چگونه خرید کنم ؟</span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-1 items-center transition-all duration-500 hover:gap-3 hover:text-orange-500">
                  <TfiAngleLeft />
                  <span>قوانین استفاده از محصولات</span>
                </Link>
              </li>
            </ul>
          </div>
          </div>
          <div className="flex justify-end items-center">
            <Image
              className="rounded-lg"
              src={"/images/1.png"}
              width={120}
              height={120}
              alt="faster lern"
            />
            <Image
              className="rounded-lg"
              src={"/images/2.png"}
              width={120}
              height={120}
              alt="faster lern"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg text-center md:text-start">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به فستر لرن  می باشد .{" "}
        </p>
        <HiOutlineArrowUp
          onClick={() => goTopCtrl()}
          className="w-8 h-8 rounded-md cursor-pointer bg-yellow-400 animate-bounce transition-all duration-500 hover:text-white hover:bg-yellow-600"
        />
      </div>
      <p className="text-center text-base"> 
          طراح و برنامه نویس: رضاعصاره
      </p>
    </div>
  );
};

export default Footer;
