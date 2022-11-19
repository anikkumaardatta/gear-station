import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../context/AuthProvider";
import { JWTtokenByUserEmail } from "../../utilities/JWT";

const SocialLogin = () => {
  const { googleSignPopUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignPopUp()
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        JWTtokenByUserEmail(currentUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-ghost w-full">
        <img src={google} style={{ height: "34px" }} alt="" />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
