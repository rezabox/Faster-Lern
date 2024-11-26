import React from "react";
import BreadCrumb from "@/components/breadCrumb";
import Image from "next/image";
import { GrFormView } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import BlogSlider from "@/components/Sliders/relatedPost/BlogSlider";
import { TiTickOutline } from "react-icons/ti";

const SingleBlog = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumb
        secondTitle={"فروشگاه"}
        secondLink={"/shop"}
        title={"فایل لایه باز ادوبی ایکس دی"}
      />
      <section className="flex items-center justify-start rounded-xl p-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)] mt-5">
        <div className="flex justify-start items-center gap-4 w-full">
          <div>
            <Image
              className="rounded-xl"
              width={400}
              height={200}
              alt="ادوبی ایکس دی"
              src={
                "/images/User-Interface-Design-Adobe-Xd.adobe-xd_1663279197.png"
              }
              priority={true}
            />
          </div>
          <div className="h-[12rem] flex flex-col gap-8">
            <h1 className="text-lg line-clamp-1">فایل ادوبی ایکس دی</h1>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>فرمت</span>
                </div>
                <div className="text-black">PSD</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>ابعاد</span>
                </div>
                <div className="text-black">1080*720</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>حجم فایل</span>
                </div>
                <div className="text-black">10 مگ</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:flex  gap-6">
        <div className="w-[20rem] flex items-center justify-start gap-2 bg-slate-50 hover:bg-slate-200 duration-300 transition-all rounded-xl shadow-[0px_0px_8px_rgba(0,0,0,0.25)] cursor-pointer p-4">
          <Image
            className="rounded-xl"
            width={100}
            height={100}
            alt={"this is alt"}
            src={"/icons/feedback.png"}
            priority={true}
          />
          <div className="flex flex-col gap-3">
            <div className="font-bold text-base sm:text-lg">
              محصولات اورجینال
            </div>
            <div className="text-base sm:text-md">برترین های دنیای وب</div>
          </div>
        </div>
        <div className="w-[20rem] flex items-center justify-start gap-2 bg-slate-50 hover:bg-slate-200 duration-300 transition-all rounded-xl shadow-[0px_0px_8px_rgba(0,0,0,0.25)] cursor-pointer p-4">
          <Image
            className="rounded-xl"
            width={100}
            height={100}
            alt={"this is alt"}
            src={"/icons/target1.png"}
            priority={true}
          />
          <div className="flex flex-col gap-3">
            <div className="font-bold text-base sm:text-lg">
              بالاترین کیفیت
            </div>
            <div className="text-base sm:text-md">تاثیرگذارترین موفقیت</div>
          </div>
        </div>
        <div className="w-[20rem] flex items-center justify-start gap-2 bg-slate-50 hover:bg-slate-200 duration-300 transition-all rounded-xl shadow-[0px_0px_8px_rgba(0,0,0,0.25)] cursor-pointer p-4">
          <Image
            className="rounded-xl"
            width={100}
            height={100}
            alt={"this is alt"}
            src={"/icons/trophy.png"}
            priority={true}
          />
          <div className="flex flex-col gap-3">
            <div className="font-bold text-base sm:text-lg">
              پشتیبانی فوق سریع
            </div>
            <div className="text-base sm:text-md">کمتر از 30 دقیقه</div>
          </div>
        </div>
      </section>
      <section className="mt-4 flex flex-col gap-6">
        <h1 className="text-blue-400 text-lg">
          آموزش نکست جی اس پیشرفته با فستر لرن{" "}
        </h1>
        <div className="flex items-center justify-start gap-5 mt-3  text-base sm:text-sm">
          <div className="bg-zinc-100 rounded-md p-2 flex justify-center items-center gap-2 ">
            <GrFormView className="w-5 h-5" />
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
      <section className="mt-5 flex flex-col gap-6 p-4 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,.25)]">
        <h2 className="text-lg">توضیحات کامل</h2>
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
      <section className="mt-5 flex flex-col  ">
        <BlogSlider title={"مقالات مرتبط"} />
      </section>
      <section className="mt-5 flex flex-col gap-6 ">
        <h2 className="text-xl">دیدگاه ها</h2>
        <form className="bg-zinc-700 rounded-md h-48">1</form>
      </section>
    </div>
  );
};

export default SingleBlog;
