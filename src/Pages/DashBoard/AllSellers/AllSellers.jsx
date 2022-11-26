import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const AllSellers = () => {
  const [deleatingSeller, setDeleatingSeller] = useState(null);
  const closeModal = () => {
    setDeleatingSeller(null);
  };
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/sellers`);
      const data = await res.json();
      return data;
    },
  });

  console.log(sellers);

  const handleVerifiedSeller = (seller) => {
    fetch(`${process.env.REACT_APP_API_URL}/sellers/verified/${seller.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller Verify Success..");
          refetch();
        }
      });
  };

  const handleDeleteSeller = (seller) => {
    fetch(`${process.env.REACT_APP_API_URL}/sellers/${seller._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller.name} deleted successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-20 mt-10">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th className="bg-primary text-white text-lg">Image</th>
                <th className="bg-primary text-white text-lg">Seller Name</th>
                <th className="bg-primary text-white text-lg">Email</th>
                <th className="bg-primary text-white text-lg">Verification</th>
                <th className="bg-primary text-white text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((seller) => (
                <tr key={seller._id} className="hover text-center">
                  <td>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={seller.image}
                      alt=""
                    />
                  </td>
                  <td className="">
                    <div className="flex items-center">
                      <span>
                        {seller.name}
                        {seller.verified ? (
                          <div className="tooltip tooltip-top" data-tip="Veryfied">
                          <FaCheckCircle
                            className="text-blue-500 ml-1"
                          />
                          </div>
                        ) : (
                          <div className="tooltip tooltip-top" data-tip="Unveryfied">
                            <FaCheckCircle />
                          </div>
                        )}
                      </span>
                    </div>
                  </td>
                  <td>{seller.email}</td>
                  {!seller.verified ? (
                    <td>
                      <button
                        onClick={() => handleVerifiedSeller(seller)}
                        className="btn btn-sm bg-primary"
                      >
                        Verify
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button className="btn btn-sm bg-secondary">
                        Verified
                      </button>
                    </td>
                  )}
                  <td>
                    <label
                      onClick={() => setDeleatingSeller(seller)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deleatingSeller && (
          <ConfirmationModal
            title={`Are you sure want to delete?`}
            message={`If You Delete ${deleatingSeller.name}, It cannot be undone.`}
            successAction={handleDeleteSeller}
            successBtnName="Delete"
            modalData={deleatingSeller}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AllSellers;
