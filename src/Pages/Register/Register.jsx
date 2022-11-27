import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";
import Lottie from "lottie-react";
import reader from "../../assets/register/register.json";

const Register = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const { createUser, updateUserProfile, setLoading, providerLogin } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleRegister = (data) => {
    // console.log(data);
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // setUserImage(imgData.data.url);
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              toast.success("SignUp Success", { autoClose: 500 });
              handleUpdateUserProfile(data.name, imgData.data.url);
              saveUser(data.name, data.email, data.role, imgData.data.url);
            })
            .catch((error) => toast.error(error.message));
        }
      });
  };

  const handleGoogleLogin = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Sign In Success");
      saveUser(user?.displayName, user?.email, "buyer", user?.photoURL);
    });
  };

  const handleUpdateUserProfile = (fullName, userImage) => {
    const profile = {
      displayName: fullName,
      photoURL: userImage,
    };
    updateUserProfile(profile)
      .then(() => {
        setLoading(false);
        toast.success("Profile Update Successful", { autoClose: 500 });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const saveUser = (name, email, role, image) => {
    const user = { name, email, role, image };

    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col lg:flex-row lg:justify-between overflow-hidden mx-5 md:mx-0 gap-10 lg:gap-32">
        <div className="w-9/12 mx-auto">
          <Lottie className="" animationData={reader} loop={true} />
        </div>
        <div className="p-5 border rounded-lg mx-5 w-11/12 lg:w-full md:p-10 shadow-shadow">
          <h2 className="text-4xl mb-10 text-center font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-3 w-full">
                <span className="text-lg block">Name</span>
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  className="w-full input input-bordered input-md text-xl block"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
              </div>
              <div className="space-y-3 w-full">
                <span className="text-lg block">Email</span>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  type="email"
                  className="w-full input input-bordered input-md text-xl block"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-3 w-full mt-3">
                <span className="text-lg block">Role</span>
                <select
                  className="w-full input input-bordered input-md text-xl block"
                  {...register("role")}
                >
                  <option selected value="buyer">
                    Buyer
                  </option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && (
                  <p className="text-red-600">{errors.role?.message}</p>
                )}
              </div>
              <div className="space-y-3 w-full mt-3">
                <span className="text-lg block">Photo</span>
                <input
                  {...register("image", {
                    required: "Photo is required",
                  })}
                  type="file"
                  className="w-full input input-bordered input-md text-xl block py-2"
                />
                {errors.image && (
                  <p className="text-red-600">{errors.image?.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-3 w-full">
                <span className="text-lg block mt-3">Password</span>
                <input
                  {...register("password", {
                    required: "Password Is Required",
                    minLength: {
                      value: 6,
                      message: "Password should be 6 charecter or longer",
                    },
                  })}
                  type="password"
                  className="w-full input input-bordered input-md text-xl block"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="space-y-3 w-full md:mt-8">
              <input
                type="submit"
                value="Sign Up"
                className="w-full btn bg-primary border border-primary hover:bg-secondary my-5 text-xl"
              />
              </div>
              
            </div>

            <span className="text-center text-sm block">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
            </span>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
          </form>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn w-full bg-secondary border border-secondary hover:bg-primary hover:border-primary text-lg"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
