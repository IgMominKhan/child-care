import { Carousel } from "flowbite-react";
import img0 from '../../assets/0.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'

const Slider = () => {
  return (
    <div className="my-12">
      <div className=" md:min-h-screen sm:h-64 xl:h-80 2xl:h-96 text">
        <Carousel>
          <img src={img0} alt=""/>
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
