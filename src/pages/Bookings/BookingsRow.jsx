import Swal from "sweetalert2";

const BookingsRow = ({ booking, handelDelete, handelConfirm }) => {
  const { _id, img, service, customerName, date, price, phone, status } =
    booking;
  return (
    <tr>
      <td>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-12 lg:w-24 rounded-xl">
              <img src={img} alt="Avatar " />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td> $ {price}</td>
      <th>
        {status === "confirm" ? (
          <button
            className="text-xs px-1 py-1 md:px-3 md:py-2 md:text-base rounded-md text-[#29B170] border border-[#29B170] "
          >
            Approved
          </button>
        ) : (
          <button
            onClick={() => handelConfirm(_id)}
            className="text-xs px-1 py-1 md:px-3 md:py-2 md:text-base rounded-md bg-[#FF3811] text-white "
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
