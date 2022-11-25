import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* <div className="flex flex-col justify-center items-center">
        <img className="w-16 h-16" src={user?.photoURL} alt="" />
        <p>{user?.displayName}</p>
      </div> */}
    </div>
  );
};

export default DashBoard;
