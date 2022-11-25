import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";

const MyProducts = () => {
  const [deleatingProduct, setDeleatingProduct] = useState(null);

  const closeModal = () => {
    setDeleatingProduct(null);
  };
  const { user } = useContext(AuthContext);
  const { data: products, isLoading,refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/my-products/seller/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  const handleDeleteProduct = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${product._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
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
    <div className="mx-20 mt-10">
      <h2 className="mb-5 text-3xl font-semibold">My Products: {products.length}</h2>
      <div >
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary">
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Date</th>
                <th>Advertised</th>
                <th>Acotion</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => <tr className="hover">
                {/* <td>{i + 1}</td> */}
                <td>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p>{product.category}</p>
                </td>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <p>Orginal Price: {product.orginalPrice}</p>
                  <p>Resale Price: {product.resalePrice}</p>
                </td>
                <td>{product.date}</td>
                {/* <td>{product.specialty}</td> */}
                <td>
                  <label
                    // onClick={() => setDeleatingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-primary"
                  >
                    Advertised
                  </label>
                </td>
                <td>
                <label
                      onClick={() => setDeleatingProduct(product)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                </td>
              </tr>)
              }
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
  );
};

export default MyProducts;
