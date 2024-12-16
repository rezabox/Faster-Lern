import Slider from './index';

const getData = async()=>{
   const data = await fetch("http://localhost:27017/api/get-active-sliders",{cache:"no-store"});
   return data.json();
}

const MaidSlider = async () => {
  const data = await getData();
  return(
    <>
      <Slider data={data}/>
    </>   
  )
}
export default MaidSlider;