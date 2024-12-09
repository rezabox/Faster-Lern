import Index from "@/components/coment";
import GraphicCategories from "@/components/graphic-cats";
import Slider from "@/components/Sliders/mainSlider";
import MiddleBanner from "@/components/middle-banners";
import ProSlider1 from "@/components/Sliders/productSlider/ProSlider";
import ProSlider2 from "@/components/Sliders/productSlider2/ProSlider";
import GraphicSlider from "@/components/Sliders/graphic-slider/graphicSlider";
import { AiFillCopyrightCircle } from "react-icons/ai";
import BlogCard from "@/components/newBlogs";

const Home = () => {
  return (
    <main className="">
      <div className="">
        <Slider />
        <ProSlider1 title="اپلیکیشن ها" linkComp='apps'/>
        <MiddleBanner/>
        <ProSlider2 title="کتاب ها" linkComp='books'/>
        <GraphicCategories />
        <GraphicSlider/>
        <BlogCard/>
      </div>
    </main>
  );
};

export default Home;
