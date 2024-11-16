import Index from "@/components/coment";
import Slider from "@/components/mainSlider";
import ProSlider1 from "@/components/productSlider/ProSlider";

import  { AiFillCopyrightCircle } from "react-icons/ai";
const Home = () => {
   return (
      <main className="">
         <div className="">
         <Slider/>
          <ProSlider1/>
          <Index/>
         </div>
      </main>
   );
}

export default Home;

