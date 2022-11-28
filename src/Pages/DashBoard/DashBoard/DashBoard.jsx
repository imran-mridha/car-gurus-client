import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const DashBoard = () => {
  useTitle("Dahboard");
  const { user } = useContext(AuthContext);
  return (
    <div className="w-11/12 lg:w-6/12 mx-auto my-20">
      <div className="p-10 w-11/12 mx-auto text-center shadow-shadow bg-white rounded-lg">
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src={user?.photoURL}
          alt=""
        />
        <h2 className="text-4xl mt-3 uppercase font-semibold">Wellcome</h2>
        <p className="text-4xl text-semibold my-3">{user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default DashBoard;
