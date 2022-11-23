import React from "react";
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = data => {
    console.log(data);
    // logInUser(data.email, data.password)
    // .then(result => {
    //   const user = result.user;
    //   console.log(user);
    //   toast.success('Sign In Success');
    //   // navigate(from, { replace: true });
    //   setLoginUserEmail(data.email)
    // })
  }
  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-center items-center">
        <div className="p-5 shadow-2xl rounded-lg w-full mx-5 md:mx-0 lg:w-96">
          <h2 className="text-2xl mb-5 text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-3">
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
            <div className="space-y-3">
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

              <span className="label-text-alt flex justify-end">
                Forgot Password?
              </span>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full btn bg-accent my-5 text-xl"
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
            {/* <div>
              <button onClick={handleGoogleLogin} className='btn w-full btn-outline btn-primary text-lg'>Continue With Google</button>
            </div> */}
          </form>
          <div>
            <button
              // onClick={handleGoogleLogin}
              className="btn w-full btn-outline btn-primary text-lg"
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
