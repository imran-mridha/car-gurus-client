import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-96 mx-auto my-20">
      <div className="p-10 w-11/12 mx-auto text-center shadow-lg rounded-lg">
        <img className="w-20 h-20 rounded-full mx-auto" src={user?.photoURL} alt="" />
        <h2 className="text-4xl mt-3 uppercase font-semibold">Wellcome</h2>
        <p className="text-4xl text-semibold my-3">{user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default DashBoard;
