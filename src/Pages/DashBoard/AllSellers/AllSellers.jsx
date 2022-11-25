import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";

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
      <h2 className="mb-5 text-3xl font-semibold">
        All Sellers: {sellers.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>Image</th>
                <th>Seller Name</th>
                <th>Email</th>
                <th>Verification</th>
                <th>Action</th>
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
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Verify</button>
                  </td>
                  <td>
                    <label
                      onClick={() => setDeleatingSeller(seller)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error"
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
