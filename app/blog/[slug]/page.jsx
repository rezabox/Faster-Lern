import React from "react";
import BreadCrumb from "@/components/breadCrumb";
import Image from "next/image";
import { GrFormView } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import BlogSlider from "@/components/Sliders/relatedPost/BlogSlider";

const SingleBlog = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumb
        secondTitle={"وبلاگ"}
        secondLink={"/"}
        title={"آموزش نکست پیشرفته؟"}
      />
      <section className="flex items-center justify-start mt-5">
        <Image
          className="rounded-xl"
          width={1000}
          height={400}
          alt="نکست جی اس"
          src={"/images/1696923705582.png"}
          priority={true}
        />
      </section>
      <section className="mt-4 flex flex-col gap-6">
        <h1 className="text-blue-400 text-lg">
          آموزش نکست جی اس پیشرفته با فستر لرن{" "}
        </h1>
        <div className="flex items-center justify-start gap-5 mt-3  text-base sm:text-sm">
          <div className="bg-zinc-100 rounded-md p-2 flex justify-center items-center gap-2 ">
            <GrFormView className="w-8 h-8" />
            <span>تعداد بازدید:</span>
            <span>5</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justify-center items-center gap-2 ">
            <FaRegComment className="w-5 h-5" />
            <span>تعداد نظرات:</span>
            <span>5</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justify-center items-center gap-2 ">
            <SlCalender className="w-5 h-5" />
            <span>آخرین به روز رسانی :</span>
            <span>1403/09/02</span>
          </div>
        </div>
      </section>
      <section className="mt-5 w-[80%] flex flex-col gap-6">
        <h2 className="text-xl">توضیحات کامل</h2>
        <p className="text-justify mt-2 leading-9">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </section>
      <section className="mt-5 w-[80%] flex flex-col gap-6">
        <h2 className="text-xl">مطالب مرتبط</h2>
        <BlogSlider/>
      </section>
      <section className="mt-5 flex flex-col gap-6 w-[80%]">
        <h2 className="text-xl">دیدگاه ها</h2>
        <form className="bg-zinc-700 rounded-md h-48">
            1
        </form>
      </section>
    </div>
  );
};

export default SingleBlog;
