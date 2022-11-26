import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";
import Lottie from "lottie-react";
import reader from "../../assets/login/loginAnimation.json";


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { logInUser, providerLogin } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    logInUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Sign In Success", {autoClose: 500});
      // navigate(from, { replace: true });
      setLoginUserEmail(data.email)
    })
    .catch(error => toast.error(error.message, {autoClose: 500}))
  };
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Sign In Success");
      // navigate(from, { replace: true });
      // setLoginUserEmail(user?.email)
      saveUser(user?.displayName, user?.email,'buyer',user?.photoURL)
    })
    .catch(error => toast.error(error.message, {autoClose: 500}))
  };
  const saveUser = (name, email,role, image) => {
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
        setLoginUserEmail(email);
      });
  };
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col lg:flex-row lg:justify-between overflow-hidden mx-5 md:mx-0 gap-10 lg:gap-32">
        <div className="w-9/12 mx-auto">
        <Lottie className="" animationData={reader} loop={true} />
        </div>
        <div className="border rounded-lg mx-5 w-11/12 lg:w-full p-5 md:p-10">
          <h2 className="text-4xl mb-10 text-center font-semibold">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col md:flex-row gap-5 ">
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
            <div className="space-y-3 w-full">
              <span className="text-lg block mt-3 md:mt-0">Password</span>
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

              {/* <span className="label-text-alt flex justify-end">
                Forgot Password?
              </span> */}
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            </div>
            
            
            <input
              type="submit"
              value="Login"
              className="w-full btn bg-primary border border-primary hover:bg-secondary my-5 text-xl"
            />
            <span className="text-center text-sm block">
              New To doctors portal?{" "}
              <Link to="/register" className="text-primary">
                Create an account
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

export default Login;
