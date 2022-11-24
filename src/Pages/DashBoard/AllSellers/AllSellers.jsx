import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";

const AllSellers = () => {
  const { data: sellers, isLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/sellers`);
      const data = await res.json();
      return data;
    },
  });

  console.log(sellers);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-20 mt-10">
      <h2 className="mb-5 text-3xl font-semibold">All Sellers: {sellers.length}</h2>
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
                <tr className="hover text-center">
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
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {deleatingDoctor && (
      <ConfirmationModal
        title={`Are you sure want to delete?`}
        message={`If You Delete ${deleatingDoctor.name}, It cannot be undone.`}
        successAction={handleDeleteDoctor}
        successBtnName="Delete"
        modalData={deleatingDoctor}
        closeModal={closeModal}
      />
    )} */}
      </div>
    </div>
  );
};

export default AllSellers;
