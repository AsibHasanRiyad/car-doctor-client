import { useLoaderData } from "react-router-dom";
import image from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const { title, price, img, _id } = service;
  const handelOrder = e =>{
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = user?.email;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const bookings = {
      customerName: name,
      email,
      date,
      phone,
      message,
      service_id:_id,
      service: title,
      price:price,
      img
    }
    console.log(bookings);
    fetch('http://localhost:5008/bookings',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if (data?.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Booked',
          text: 'Book another service!',
        })
      }
    })
  }
  return (
    <div className=" mx-4 my-4 md:mx-20 md:my-10">
      <div className=" relative w-full ">
        <img src={image} className="h-[40vh] w-full rounded" />
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded">
          <div className=" space-y-5 pl-4 md:pl-12 lg:pl-24">
            <h1 className=" text-2xl md:text-4xl font-bold">Check Out</h1>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center ">
        <button className="bg-[#FF3811] text-base md:text-xl text-white z-40 px-3 py-2">Home/ Check Out</button>
      </div> */}

      {/* form */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-0 py-12 mx-auto">
          <div className=" mt-4 md:mt-10">
            <div className=" py-6 rounded-lg bg-gray-50 dark:bg-gray-800 lg:p-8">
              <form 
              onSubmit={handelOrder}
              className=" px-4 lg:px-20 ">
                <div className="-mx-2 md:items-center md:flex gap-5">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name "
                      defaultValue={user?.displayName}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Date
                    </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="-mx-2 md:items-center md:flex mt-3 gap-5">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Your Phone
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone "
                      name="phone"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Due Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Due Amount"
                      name="price"
                      defaultValue= {'$' + price}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Your Email
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email"
                      defaultValue={user?.email}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF3811] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Order Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
