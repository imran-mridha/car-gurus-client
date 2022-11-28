import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const BookingModal = ({ productData, seProductData }) => {
  const { name, resalePrice } = productData;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;
    const email = form.email.value;

    const booking = {
      image: productData.image,
      name: productData.name,
      price: productData.resalePrice,
      buyerPhone: phone,
      buyerLocation: location,
      productId: productData._id,
      email,
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
          seProductData(null);
          // refetch();
        } else {
          toast.error(data.message);
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
          <div className="text-gray-600">
            <h3 className="text-lg font-bold">{name}</h3>
            <p>Price: ${resalePrice}</p>
          </div>
          <form
            onSubmit={handleBooking}
            className="mt-5 space-y-5 text-gray-600"
          >
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
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full bg-primary hover:bg-secondary text-white text-xl cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
