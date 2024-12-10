"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "./Box";
import Image from "next/image";

const AllMidBanners = ({setmidBanCtrl}) => {
  const [banners, setbanners] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [numbersOfbtns, setnumberOfBtns] = useState([-1]);

  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
      .then((d) => {
        setbanners(d.data.GoalMidBans);
        setnumberOfBtns(
          Array.from(Array(Math.ceil(d.data.AllMidBansNum / 2)).keys())
        );
        goTopCtrl();
      })
      .catch((e) => console.log(e.data));
  }, [pageNumber]);

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {banners.length < 1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          banners.map((ba, i) => <Box setmidBanCtrl={setmidBanCtrl} key={i} data={ba} />)
        )}
      </div>
      <div className="flex justify-center gap-4 items-center">
        {numbersOfbtns[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={40}
              height={40}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          numbersOfbtns.map((da, i) => (
            <button
              key={i}
              className="flex items-center justify-center rounded-md bg-indigo-500 hover:bg-orange-400 transition-all duration-400 text-white w-12 h-12"
              onClick={() => {
                setPageNumber(da + 1);
                setbanners([]);
              }}
            >
              {da + 1}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default AllMidBanners;
