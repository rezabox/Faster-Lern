"use client";
import React from "react";

const DashboardBtn = ({
  title,
  content,
  setContentchander,
  colorChanger,
  setcolorChanger,
}) => {
  return (
    <button
      onClick={() => {
        setContentchander(content);
        setcolorChanger(content);
      }}
      className={
         colorChanger==content
         ?"rounded-md hover:bg-indigo-500  w-32 h-12 flex justify-center items-center bg-indigo-500 text-white transition-all duration-500"
         :"rounded-md hover:bg-indigo-500  w-32 h-12 flex justify-center items-center bg-orange-500 text-white transition-all duration-500"
      }
    >
      {title}
    </button>
  );
};

export default DashboardBtn;
