import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { JWTtokenByUserEmail } from "../../utilities/JWT";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // get JWT token
        JWTtokenByUserEmail(currentUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.err(error);
      });
  };
  return (
    <div className="hero bg-teal-500">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center max-w-3xl lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form
            onSubmit={handleLoginWithEmailAndPassword}
            className="card-body"
          >
            <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
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
              <input type="submit" className="btn btn-success" value="Login" />
            </div>
            <p className="my-6 text-center text-gray-600">
              Didn't have any account?{" "}
              <Link to="/signup" className="text-orange-600">
                Please Register
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

export default Login;
