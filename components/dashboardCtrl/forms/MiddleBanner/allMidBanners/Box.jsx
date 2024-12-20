"use client";
import Image from "next/image";
import React from "react";

const Box = ({ data, setmidBanCtrl, setrandNumForBannerClick }) => {
  return (
    <div
      onClick={() => {
        setmidBanCtrl(data._id);
        const rn = Math.ceil(Math.random()*20)
        setrandNumForBannerClick(rn);
      }}
      className="cursor-pointer p-6 w-full rounded-lg bg-zinc-200 border-2 border-zinc-300 transition-all duration-500 hover:bg-orange-500"
    >
      <div className="flex justify-start items-center">
        <Image
          className="rounded-lg"
          src={data.image}
          alt={data.imageAlt}
          width={400}
          height={200}
        />
      </div>
      <div className="flex justify-end items-center gap-3">
        {data.situation == true ? (
          <div className="text-xs bg-green-600 text-white px-3 py-1 rounded">
            {" "}
            روشن
          </div>
        ) : (
          <div className="text-xs bg-rose-600 text-white px-3 py-1 rounded">
            خاموش
          </div>
        )}
        <div className="text-xs bg-orange-500 text-white px-3 py-1 rounded">
          {data.date}
        </div>
      </div>
    </div>
  );
};

export default Box;
