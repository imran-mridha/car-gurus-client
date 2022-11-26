import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const ReportingModal = ({ reportData, seReportData }) => {
  const { name } = reportData;

  const { user } = useContext(AuthContext);

  const handleReporting = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const report = {
      image: reportData.image,
      name: reportData.name,
      productId: reportData._id,
      email: user.email,
      userName: user.displayName,
      message: message,
    };

    fetch(`${process.env.REACT_APP_API_URL}/reporting`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report Confirmed");
          seReportData(null);
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="reporting-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reporting-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-gray-600">
            <h3 className="text-lg font-bold">{name}</h3>
          </div>
          <form
            onSubmit={handleReporting}
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

            <textarea
              className="input input-bordered w-full h-20"
              placeholder="Your Message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full text-white text-xl cursor-pointer bg-primary hover:bg-secondary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportingModal;
