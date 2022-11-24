import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Date</th>
              <th>Advertised</th>
              <th>Acotion</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
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
                  // onClick={() => setDeleatingDoctor(doctor)}
                  htmlFor="confirmation-modal"
                  className="btn btn-xs btn-error"
                >
                  Delete
                </label>
              </td>
            </tr>
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
  );
};

export default Product;
