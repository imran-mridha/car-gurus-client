import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ product }) => {

  const {
    name,
    orginalPrice,
    resalePrice,
    date,
    usagesYear,
    description,
    phone,
    quality,
    sellerImage,
    sellerName,
  } = product;

  const { name, slots, price } = treatment;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
      price
    };

    fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          setTreatment(null);
          refetch();
        }else{
          toast.error(data.message)
        }
        
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-5 space-y-5">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full bg-accent text-white text-xl cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
