import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoResizeOutline } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { TiBrush } from "react-icons/ti";


const CartBox = () => {
  return (
    <Link href={'/'}>
      <div className="flex items-center justify-between bg-slate-100 transition-all duration-300 hover:bg-yellow-400 rounded-lg p-3 w-72">
        <div className="flex-col">
          <h3 className="text-black">فایل لایه باز فتوشاپ</h3>
          <p className="text-base sm:text-sm">وکتور های گرافیکی قدرتمند</p>
        </div>
        <div className="w-16">
          <Image
            layout="fixed"
            objectFit="cover"
            alt="فایل لایه باز فوتوشاپ"
            width={60}
            height={60}
            src={"/categories/photoshop2-min.png"}
          />
        </div>
      </div>
    </Link>
  );
};

export default CartBox;
