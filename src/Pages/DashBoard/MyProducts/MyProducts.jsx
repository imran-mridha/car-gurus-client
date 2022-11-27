import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import { format, formatDistanceToNow } from "date-fns";

const MyProducts = () => {
  useTitle("My-Products");
  const [deleatingProduct, setDeleatingProduct] = useState(null);

  const closeModal = () => {
    setDeleatingProduct(null);
  };
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/my-products/seller/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  const makeAdvertised = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/makeAdvertise/${product?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make advertice success.");
          refetch();
        }
      })
      .catch((error) => console.error(error));
  };
  const handleDeleteProduct = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${product._id}`, {
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
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {products?.length > 0 ? (
        <div className="mx-5 md:mx-20 my-10">
          <h2 className="mb-5 text-3xl font-semibold text-white">
            My Products: {products.length}
          </h2>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-center">
                    <th className="bg-gray-100 text-gray-600 text-lg">Image</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Product
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">Price</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">Date</th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Status
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Advertised
                    </th>
                    <th className="bg-gray-100 text-gray-600 text-lg">
                      Acotion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="hover text-center ">
                      <td>
                        <div className="avatar">
                          <div className="w-12 rounded-full">
                            <img src={product.image} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <h2 className="text-md font-semibold">
                          {product.name}
                        </h2>
                        <p>category: {product.categoryName}</p>
                      </td>

                      <td>
                        <p>Orginal Price: ${product.orginalPrice}</p>
                        <p>Resale Price: ${product.resalePrice}</p>
                      </td>
                      <td>
                        <p
                          className="tooltip tooltip-top"
                          data-tip={format(new Date(product.date), "PPPPp")}
                        >
                          {formatDistanceToNow(new Date(product.date), {
                            includeSeconds: true,
                          })}
                        </p>
                      </td>

                      <td>
                        {product.status === "sold" ? (
                          <span className="uppercase font-bold">
                            {product.status}
                          </span>
                        ) : (
                          <span className="uppercase font-bold">Available</span>
                        )}
                      </td>
                      {/* <td>{product.specialty}</td> */}
                      <td>
                        {!product?.isAdvertise ? (
                          <button
                            // disabled={product.status === "sold"}
                            // onClick={() => setDeleatingDoctor(doctor)}
                            // htmlFor="confirmation-modal"
                            onClick={() => makeAdvertised(product)}
                            className="btn btn-sm bg-gray-500 border-gray-500"
                          >
                            Make Advertised
                          </button>
                        ) : (
                          <button className="btn btn-sm bg-gray-500 border-gray-500">
                            Advertised On
                          </button>
                        )}
                      </td>
                      <td>
                        <label
                          onClick={() => setDeleatingProduct(product)}
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
          <span>You haven't any Product</span>
        </div>
      )}
    </>
  );
};

export default MyProducts;
