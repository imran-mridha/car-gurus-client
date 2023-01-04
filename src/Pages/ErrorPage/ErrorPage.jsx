import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../../assets/errorpage/error.json";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Lottie animationData={reader} loop={true} />
          <div className="mt-10">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="btn btn-md bg-primary border border-primary text-white hover:bg-secondary hover:border-secondary"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
