"use client";
import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewMidBaner = () => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const formKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  const submiter = (e) => {
    e.preventDefault();
    const formData = {
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      link: imageLinkRef.current.value,
      situation: imageSituationRef.current.value,
    };
    const url = `http://localhost:27017/api/new-middle-banners`;
    
    axios.post(url, formData)
    .then(d=> {
        formData.situation == 'true'
        ? toast.success("بنر تبلیغاتی با موفقیت منتشر شد.", {
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  : toast.success("بنر تبلیغاتی به صورت پیشنویس ذخیره شد.", {
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
    })
    .catch(e=> {
        if(formData.image == ''){
          alert('عکس را به طور کامل وارد کنید.')
        }else if(formData.imageAlt == ''){
          alert('آلت عکس را وارد کنید.')
        }
    })
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">بنر جدید</h2>
      <form onKeyDown={formKeyNotSuber} onSubmit={submiter} className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div>آدرس عکس</div>
          <input
            required={true}
            type="text"
            ref={imageUrlRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت عکس</div>
          <input
            required={true}
            type="text"
            ref={imageAltRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک عکس</div>
          <input
            required={true}
            type="text"
            ref={imageLinkRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-200 focus:border-orange-400"
          >
            <option value={true}>روشن</option>
            <option value={false}>خاموش</option>
          </select>
        </div>
        <button
          type="submiter"
          className="p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-500 hover:bg-orange-500"
        >
          ارسال
        </button>
      </form>
        <ToastContainer
              bodyClassName={() => "font-[shabnam] text-sm flex items-center"}
              position="top-right"
              autoClose={3000}
              theme="colored"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
         />
    </div>
  );
};
export default NewMidBaner;
