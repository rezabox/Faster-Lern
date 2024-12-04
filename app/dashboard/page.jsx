import MainDashboard from "@/components/dashboardCtrl/mainDashboard";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between items-start gap-1 container mx-auto">
      <MainDashboard />
      <div className="">text</div>
    </div>
  );
};

export default page;
