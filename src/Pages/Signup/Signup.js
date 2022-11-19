import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/signup/signup.svg";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = "/";

  const handleSignupWithEmailAndPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    <Navigate to="/" replace></Navigate>;
    form.reset();
  };
  return (
    <div className="hero  bg-teal-500">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center max-w-3xl lg:text-left ">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form
            onSubmit={handleSignupWithEmailAndPassword}
            className="card-body"
          >
            <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Register now!</h1>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-success"
                value="Register"
              />
            </div>
            <p className="my-6 text-center text-gray-600">
              Already have account ?{" "}
              <Link to="/login" className="text-orange-600">
                Please Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <div className="form-control">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
