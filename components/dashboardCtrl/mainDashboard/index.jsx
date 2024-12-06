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
      <div className="flex  items-start justify-between  gap-4 container mx-auto ">
        <DashboardCtrl
          contentchander={contentchander}
          setContentchander={setContentchander}
          />
          <div className="w-full ">
              {details}
          </div>
      </div>
    </div>
  );
};

export default MainDashboard;
