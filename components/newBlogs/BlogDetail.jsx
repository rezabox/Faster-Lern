import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogDetail = () => {
  return (
    <article className="sliderItem p-4 hover:mt-[-20px] transition-all duration-500">
      <div className="relative h-[25rem] w-73  bg-white shadow-[0px_1px_8px_rgba(0,0,0,.2)] rounded-md cursor-pointer">
        <div>
          <Image width={350} height={140} src={"/images/Network-Security-pingonet.net-min.jpg"} alt="alt" />
        </div>
        <Link href={"/shop"}>
          <div className="flex flex-col gap-6 p-2">
            <h3 className="line-clamp-1">شبکه های کاپیوتری</h3>
          </div>
        </Link>
        <div className="px-3">
          <p className="line-clamp-4 md:line-clamp-5 text-base sm:text-sm text-justify">
            شبکه کامپیوتری نوعی اتصال متقابل بین کامپیوترها است یا می‌توان گفت
            شبکه کامپیوتری مجموعه‌ای از کامپیوترهای متصل به یکدیگر بوده که یک
            کامپیوتر را قادر می‌سازد با کامپیوتر دیگری ارتباط برقرار کند.
            می‌توان در پاسخ کوتاه به اینکه شبکه چیست می‌توان گفت که شبکه
            به‌عنوان پایه ارتباطات در فناوری اطلاعات (IT) عمل می‌کند.
          </p>
          <br />
          <hr />
          <div className="flex justify-between items-center mt-3">
               <div className="text-base sm:text-sm bg-zinc-400 text-white  rounded-md py-1 px-3">1403/09/02</div>
               <div className="text-base sm:text-sm bg-zinc-400 text-white rounded-md py-1 px-3"> دیدگاه  12</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
