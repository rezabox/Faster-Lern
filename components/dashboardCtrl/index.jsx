import React from "react";
import DashboardBtn from "./btn";

const DashboardCtrl = ({ contentchander, setContentchander }) => {
  return (
    <div className="w-50 bg-zinc-200 flex items-center justify-center  p-4 rounded-md">
      <div className="flex flex-col gap-6">
        <DashboardBtn
          title={"بنر های تبلیغاتی "}
          content={"midBan"}
          setContentchander={setContentchander}
        />
        <DashboardBtn
          title={"اسلایدر ها"}
          content={"sliders"}
          setContentchander={setContentchander}
        />
        {/* <DashboardBtn title={"بنر های تبلیغاتی "} content={"midBan"}/>
        <DashboardBtn title={"بنر های تبلیغاتی "} content={"midBan"}/> */}
      </div>
    </div>
  );
};

export default DashboardCtrl;
