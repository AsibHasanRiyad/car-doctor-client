import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-full lg:h-[70vh] ">
        <div id="slide1" className="carousel-item relative w-full ">
        <img src={image1} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20  ">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 lg:pl-12 rounded-xl">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, butthe
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={image2} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 lg:pl-12 rounded-xl ">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, butthe
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={image3} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-2 lg:space-y-5 pl-4 lg:pl-12 rounded-xl">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={image4} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 lg:pl-12 rounded-xl">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, butthe
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full ">
        <img src={image5} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 lg:pl-12 rounded-xl">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, butthe
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full ">
        <img src={image6} className="w-full rounded-xl" />
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 z-20">
          <a
            href="#slide5"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-white hover:border-none hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 lg:pl-12 rounded-xl">
          <h1 className=" text-base lg:text-6xl md:text-4xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-xl">
            There are many variations of passages of available, butthe
            majority have suffered alteration in some form
          </p>
          <div className=" space-x-3">
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Discover More
            </button>
            <button className="text-xs outline px-1 py-1 md:px-3 md:py-2 md:text-base rounded text-white outline-white hover:bg-[#FF3811] hover:outline-none hover:text-white ">
              Latest Project
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
