"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

SwiperCore.use([Autoplay]);

const Slider = ({ data }) => {
  return (
    <main>
      <section className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
        >
          {data.map((da, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center">
                <Image
                  src={da.image}
                  className="rounded-lg"
                  width={1280}
                  height={300}
                  alt={da.imageAlt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Slider;
