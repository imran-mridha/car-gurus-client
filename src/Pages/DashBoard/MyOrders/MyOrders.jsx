import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const MyOrders = () => {
  useTitle('My-Orders')
  const { user } = useContext(AuthContext);
  const url = `${process.env.REACT_APP_API_URL}/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-20 my-10">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-xl">
              <tr className="text-center text-xl">
                <th className="bg-primary text-white text-xl">Image</th>
                <th className="bg-primary text-white text-xl">Car Name</th>
                <th className="bg-primary text-white text-xl">Price</th>
                <th className="bg-primary text-white text-xl">Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((order) => (
                <tr key={order._id} className="hover text-center text-xl">
                  <td>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={order.image}
                      alt=""
                    />
                  </td>
                  <td>{order.name}</td>
                  <td>${order.price}</td>
                  {/* <td>
                    <button className="btn btn-sm btn-primary">Verify</button>
                  </td> */}
                  <td>
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn bg-primary border-primary hover:bg-secondary btn-md text-xl">pay now</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <button className="btn btn-sm text-xl" disabled>Paid</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
