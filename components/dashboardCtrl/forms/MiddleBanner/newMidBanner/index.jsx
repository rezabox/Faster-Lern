"use client";
import React, { useRef } from "react";
import axios from "axios";

const NewMidBaner = () => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

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
    .then(d=> alert('is ok'))
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
      <form onSubmit={submiter} className="flex flex-col gap-7">
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
    </div>
  );
};
export default NewMidBaner;
