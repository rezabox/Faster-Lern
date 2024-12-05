"use client";
import React, { useState, useEffect } from "react";
import DashboardCtrl from "..";
import MiddleBannerAll from "../forms";
import SliderForm from "../sliderform";

const MainDashboard = () => {
  const [contentchander, setContentchander] = useState("midBan");
  const [details, setDetails] = useState(<MiddleBannerAll />);
  useEffect(()=> {
    if (contentchander == 'midBan'){
        setDetails(<MiddleBannerAll />)
    }else if(contentchander == 'sliders'){
        setDetails(<SliderForm />)
    }

  },[contentchander])

  return (
    <div className="w-full rounded-md">
      <div className="flex p-4 items-start justify-between bg-red-300 gap-12 ">
        <DashboardCtrl
          contentchander={contentchander}
          setContentchander={setContentchander}
          />
          <div>
              {details}
          </div>
      </div>
    </div>
  );
};

export default MainDashboard;
