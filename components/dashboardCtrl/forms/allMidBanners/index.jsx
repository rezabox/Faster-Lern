"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "./Box";
import Image from "next/image";

const AllMidBanners = () => {
  const [banners, setbanners] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
      .then((d) => setbanners(d.data))
      .catch((e) => console.log(e.data));
  }, []);

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
          banners.map((ba, i) => <Box key={i} data={ba} />)
        )}
      </div>
      <div className="">buttons</div>
    </div>
  );
};

export default AllMidBanners;
