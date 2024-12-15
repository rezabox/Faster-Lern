"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const NewBannerDetails = ({ midBanId }) => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const submiter = (e) => {
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
      .then((d) => alert("is ok"))
      .catch((e) => console.log('error'));
      
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
      .catch((e) => console.log("error"));
  }, [midBanId]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">جزئیات بنر</h2>
      <form onSubmit={submiter} className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div>آدرس جدید عکس</div>
          <input
            type="text"
            defaultValue={imageUrlS}
            ref={imageUrlRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            type="text"
            defaultValue={imageAltS}
            ref={imageAltRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
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
    </div>
  );
};
export default NewBannerDetails;
