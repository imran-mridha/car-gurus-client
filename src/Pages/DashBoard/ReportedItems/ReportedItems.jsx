import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import Loader from "../../../Shared/Loader/Loader";
import useTitle from "../../../hooks/useTitle";

const ReportedItems = () => {
  useTitle("Reported-Items");
  const [deleatingProduct, setDeleatingProduct] = useState(null);

  const closeModal = () => {
    setDeleatingProduct(null);
  };

  const { user } = useContext(AuthContext);

  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reporting"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/reporting`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/reporting/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Product ${product.name} deleted successfully`);
          refetch();
        }
      });

    if (isLoading) {
      return <Loader />;
    }
  };
  return (
    <>
      {reports?.length > 0 ? (
        <div className="mx-5 md:mx-20 my-10">
          <h2 className="mb-5 text-3xl font-semibold text-white">
            Reported Products: {reports.length}
          </h2>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-center">
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Buyer Name
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">Email</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Product Name
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Product Image
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Message
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Acotion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reports?.map((report) => (
                    <tr key={report._id} className="hover text-center ">
                      {/* <td>{i + 1}</td> */}
                      <td>
                        <h2 className="text-xl font-bold">{report.userName}</h2>
                      </td>
                      <td>{report.email}</td>
                      <td>{report.name}</td>
                      <td>
                        <img
                          className="w-16 h-16 rounded-full mx-auto"
                          src={report.image}
                          alt=""
                        />
                      </td>

                      <td>{report.message}</td>

                      <td>
                        <label
                          onClick={() => setDeleatingProduct(report)}
                          htmlFor="confirmation-modal"
                          className="btn btn-xs btn-error text-white"
                        >
                          Delete
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {deleatingProduct && (
              <ConfirmationModal
                title={`Are you sure want to delete?`}
                message={`If You Delete ${deleatingProduct.name}, It cannot be undone.`}
                successAction={handleDeleteProduct}
                successBtnName="Delete"
                modalData={deleatingProduct}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-4xl uppercase w-11/12 text-center mx-auto text-gray-600 h-[200px] md:h-[500px]">
          <span>You haven't any reported items</span>
        </div>
      )}
    </>
  );
};

export default ReportedItems;
