/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, img, title, price } = service;
  return (
    <div className="card bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p className=" text-[#FF3811] font-medium text-xl">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <button className=" text-[#FF3811] text-xl bg-white p-3 rounded-full hover:bg-[#FF3811] hover:text-white transform ease-in duration-300">
           <BsArrowRight></BsArrowRight>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
