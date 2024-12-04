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
    <div className="w-50 bg-zinc-200 flex items-center justify-center  p-4 rounded-md">
      <div className="flex flex-col gap-6">
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
