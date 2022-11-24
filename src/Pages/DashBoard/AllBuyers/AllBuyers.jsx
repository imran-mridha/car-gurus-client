import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loader from '../../../Shared/Loader/Loader';

const AllBuyers = () => {
  const { data: buyers, isLoading } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/buyers`);
      const data = await res.json();
      return data;
    },
  });

  console.log(buyers);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-20 mt-10">
      <h2 className="mb-5 text-3xl font-semibold">All Buyers: {buyers.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='text-center'>
                <th>Image</th>
                <th>Byuer Name</th>
                <th>Email</th>
                <th>Verification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer) => (
                <tr className="hover text-center">
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

export default AllBuyers;