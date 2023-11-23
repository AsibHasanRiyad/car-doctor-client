import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import image from "../../assets/images/checkout/checkout.png";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5008/bookings?email=${user?.email}`,{withCredentials:true})
    .then(res =>{
      setBookings(res.data)
    })


    fetch(`http://localhost:5008/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email]);
  // console.log(bookings);

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5008/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Booking has been canceled.");
            }
            const remaining = bookings.filter((booking) => booking._id !== _id);
            setBookings(remaining);
          });
      }
    });
  };
  const handelConfirm = (id) => {
    fetch(`http://localhost:5008/bookings/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status: 'confirm'})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount> 0) {
          const remaining = bookings.filter(booking => booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status('confirm')
          const newBookings = [updated, ...remaining];
          setBookings(newBookings)
        }
      });
  };
  return (
    <div className="overflow-x-auto mx-4 md:mx-20 ">
      <div className=" relative w-full ">
        <img src={image} className="h-[40vh] w-full rounded" />
        <div className="absolute text-white flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full z-10 rounded-xl">
          <div className=" space-y-5 pl-4 md:pl-12 lg:pl-24">
            <h1 className=" text-2xl md:text-4xl font-bold">My Bookings</h1>
          </div>
        </div>
      </div>
      <table className="table mt-10">
        <tbody>
          {bookings.map((booking) => (
            <BookingsRow
              key={booking._id}
              booking={booking}
              handelConfirm={handelConfirm}
              handelDelete={handelDelete}
            ></BookingsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
