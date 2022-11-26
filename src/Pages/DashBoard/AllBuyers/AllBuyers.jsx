import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const AllBuyers = () => {
  useTitle('All-Buyers')
  const [deleatingBuyer, setDeleatingBuyer] = useState(null);
  const closeModal = () => {
    setDeleatingBuyer(null);
  };
  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/buyers`);
      const data = await res.json();
      return data;
    },
  });

  console.log(buyers);

  const handleDeleteBuyer = (buyer) => {
    fetch(`${process.env.REACT_APP_API_URL}/buyers/${buyer._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Buyer ${buyer.name} deleted successfully`);
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
        All Buyers: {buyers.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th className="bg-primary text-white text-lg">Image</th>
                <th className="bg-primary text-white text-lg">Byuer Name</th>
                <th className="bg-primary text-white text-lg">Email</th>
                
                <th className="bg-primary text-white text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer) => (
                <tr key={buyer._id} className="hover text-center">
                  <td>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={buyer.image}
                      alt=""
                    />
                  </td>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                    <label
                      onClick={() => setDeleatingBuyer(buyer)}
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
        {deleatingBuyer && (
          <ConfirmationModal
            title={`Are you sure want to delete?`}
            message={`If You Delete ${deleatingBuyer.name}, It cannot be undone.`}
            successAction={handleDeleteBuyer}
            successBtnName="Delete"
            modalData={deleatingBuyer}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AllBuyers;
