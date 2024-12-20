"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewBannerDetails = ({ midBanId }) => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const formKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  const submiterUpdate = (e) => {
    e.preventDefault();
    const formData = {
      goalId: midBanId,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      link: imageLinkRef.current.value,
      situation: imageSituationRef.current.value,
    };
    const url = `http://localhost:27017/api/update-middle-banners`;

    axios
      .post(url, formData)
      .then((d) => {
        formData.situation == "true"
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
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }
        toast.error(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const [imageUrlS, setimageUrlS] = useState("");
  const [imageAltS, setImageAltS] = useState("");
  const [imageLinkS, setImageLink] = useState("");
  const [imageSituationS, setimageSituationS] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/get-mid-ban/${midBanId}`)
      .then((d) => {
        setimageUrlS(d.data.image);
        setImageAltS(d.data.imageAlt);
        setImageLink(d.data.link);
        setimageSituationS(d.data.situation);
      })
      .catch((e) =>
        toast.error("خطا در لود اطلاعات", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  }, [midBanId]);

  const remove = () => {
    const formData = {
      goalId: midBanId,
    };
    const url = `http://localhost:27017/api/delete-middle-banners`;
    axios
      .post(url, formData)
      .then((d) => {
        toast.success("بنر با موفقیت حذف شد.", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }
        toast.error(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات بنر</h2>
        <button
          onClick={() => remove()}
          className="bg-rose-600 text-white hover:bg-rose-500 duration-500 transition-all px-4 py-1 rounded-md text-xs"
        >
          حذف بنر
        </button>
      </div>
      <form
        onKeyDown={formKeyNotSuber}
        onSubmit={submiterUpdate}
        className="flex flex-col gap-7"
      >
        <div className="flex flex-col gap-2">
          <div>آدرس جدید عکس</div>
          <input
            required={true}
            type="text"
            defaultValue={imageUrlS}
            ref={imageUrlRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            required={true}
            type="text"
            defaultValue={imageAltS}
            ref={imageAltRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
            required={true}
            type="text"
            defaultValue={imageLinkS}
            ref={imageLinkRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-200 focus:border-orange-300 "
          >
            {imageSituationS == true ? (
              <>
                <option value={true}>روشن</option>
                <option value={false}>خاموش</option>
              </>
            ) : (
              <>
                <option value={false}>خاموش</option>
                <option value={true}>روشن</option>
              </>
            )}
          </select>
        </div>
        <button
          type="submiter"
          className="p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-500 hover:bg-orange-500"
        >
          به روز رسانی
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
export default NewBannerDetails;
