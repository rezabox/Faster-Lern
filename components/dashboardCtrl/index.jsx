'use client';
import React, { useState } from "react";
import DashboardBtn from "./btn";

const DashboardCtrl = ({ setContentchander }) => {
  const [colorChanger,setcolorChanger] = useState("midBan");
  return (
    <div className="w-50 bg-zinc-200 flex items-center justify-center  p-4 rounded-lg">
      <div className="flex flex-col gap-6">
        <DashboardBtn
          title={"بنر های تبلیغاتی "}
          content={"midBan"}
          setContentchander={setContentchander}
          colorChanger={colorChanger}
          setcolorChanger={setcolorChanger}
        />
        <DashboardBtn
          title={"اسلایدر ها"}
          content={"sliders"}
          setContentchander={setContentchander}
          colorChanger={colorChanger}
          setcolorChanger={setcolorChanger}
        />
        {/* <DashboardBtn title={"بنر های تبلیغاتی "} content={"midBan"}/>
        <DashboardBtn title={"بنر های تبلیغاتی "} content={"midBan"}/> */}
      </div>
    </div>
  );
};

export default DashboardCtrl;
