import "../Form/Form.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../../utils/AuthContext";
import { storage } from "../../../appwriteConfig.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const { user, loginUser } = useAuth();
  const signInForm = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const bucketId = "projectImages";

  const handleSignInSubmit = (e: any) => {
    e.preventDefault();
    const email = signInForm.current.email.value;
    const password = signInForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <>
      <div className="container flex-md-nowrap">
        <section className="row d-flex justify-content-between flex-wrap flex-md-nowrap gap-3 align-items-center">
          <div className=" col-md-6 col-lg-5">
            <img
              src={`${storage.getFilePreview(bucketId, "SignInImage").href}`}
              alt="signin"
              className="signin_image"
            />
            <div className="carousel-item active text-center pt-2">
              <img
                src={`${storage.getFilePreview(bucketId, "Logo")}`}
                alt="logo"
              />
            </div>
          </div>
          <div className=" col-md-6 col-lg-6 signin_container mt-3 d-flex flex-column justify-content-lg-center p-1 p-md-">
            <form
              ref={signInForm}
              onSubmit={handleSignInSubmit}
              className="d-flex flex-column gap-xl-2 gap-xxl-4"
            >
              <span className="text-start h1">Sign In</span>
              <p>
                Don't have an account yet?
                <Link
                  to="/signup"
                  className="text-success text-decoration-none fs-6"
                >
                  {" "}
                  Sign Up
                </Link>
              </p>
              <div className="mb-3 border-bottom">
                <input
                  type="email"
                  className="form-control border-0 shadow-none"
                  placeholder="Your Email address"
                  name="email"
                  required
                />
              </div>

              <div className="d-flex align-items-center mb-3 border-bottom">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control border-0  shadow-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="border-0 bg-transparent"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>

              <div className=" d-flex justify-content-between align-items-baseline mb-3">
                <div className="custom-control custom-checkbox d-flex gap-1 align-items-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    required
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
                <p className="forgot-password text-right text-dark fw-medium">
                  Forgot password?
                </p>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-dark text-white fw-medium"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
