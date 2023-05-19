import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div>
      <div className=" md:min-h-screen sm:h-64 xl:h-80 2xl:h-96 text">
        <Carousel>
          <div
            className="bg-[#efefef] flex h-full items-center justify-center">
            <h1 className="text-6xl p-12 mt-8 max-w-4xl mx-auto">Our Mission is to Take care your child education?</h1>
            kj
          </div>
          <div className="bg-[#efefef] flex h-full items-center justify-center">
            Slide 2
          </div>
          <div className="bg-[#efefef] flex h-full items-center b justify-center">
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
