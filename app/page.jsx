import Index from "@/components/coment";
import Slider from "@/components/mainSlider";
import MiddleBanner from "@/components/middle-banners";
import ProSlider1 from "@/components/productSlider/ProSlider";
import ProSlider2 from "@/components/productSlider2/ProSlider";
import { AiFillCopyrightCircle } from "react-icons/ai";
const Home = () => {
  return (
    <main className="">
      <div className="">
        <Slider />
        <ProSlider1 title="اپلیکیشن ها" linkComp='apps'/>
        <MiddleBanner/>
        <ProSlider2 title="کتاب ها" linkComp='books'/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          veritatis expedita neque unde iste quae soluta ut explicabo blanditiis
          a. Dolore rerum magni eius expedita accusantium commodi debitis
          necessitatibus earum.
        </p>
        <Index />
      </div>
    </main>
  );
};

export default Home;
