import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const AllSellers = () => {
  useTitle("All-Sellers");
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
      const res = await fetch(`${process.env.REACT_APP_API_URL}/sellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
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
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
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
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
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
    <>
      {sellers?.length > 0 ? (
        <div className="mx-5 md:mx-20 mt-10 shadow-shadow z-50">
          <h2 className="mb-5 text-3xl font-semibold text-white">
            All Sellers: {sellers.length}
          </h2>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-center">
                    <th className="bg-gray-100 text-gray-600 text-lg">Image</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Seller Name
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">Email</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Verification
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Action
                    </th>
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
                        <div>
                          <span className="flex items-center">
                            {seller.name}
                            {seller.verified ? (
                              <div
                                className="tooltip tooltip-top ml-1"
                                data-tip="Veryfied"
                              >
                                <FaCheckCircle className="text-blue-500 ml-1" />
                              </div>
                            ) : (
                              <div
                                className="tooltip tooltip-top ml-1"
                                data-tip="Unveryfied"
                              >
                                <FaCheckCircle className="text-gray-500 ml-1" />
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
                            className="btn btn-sm bg-gray-500 border-gray-500"
                          >
                            Verify
                          </button>
                        </td>
                      ) : (
                        <td>
                          <button className="btn btn-sm bg-gray-500 border-gray-500">
                            Verified
                          </button>
                        </td>
                      )}
                      <td>
                        <label
                          onClick={() => setDeleatingSeller(seller)}
                          htmlFor="confirmation-modal"
                          className="btn btn-sm btn-error text-white"
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
      ) : (
        <div className="flex justify-center items-center text-4xl uppercase w-11/12 text-center mx-auto text-gray-600 h-[200px] md:h-[500px]">
          <span>You haven't any Seller</span>
        </div>
      )}
    </>
  );
};

export default AllSellers;
