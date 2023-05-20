/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import UseTitle from "../Hooks/UseTitle";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  UseTitle("Login");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    if (!email || !password) {
      setError("Please fill in all the fields");
      return;
    }
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password");
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 data-aos="fade-down" className="text-5xl font-bold text-center mt-28"><span className="text-primary">Login</span> now!</h1>
      <div className="hero bg-[#000]">
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" className="text-center lg:text-left">
            <p className="py-6">
              <img
                className="w-96 mb-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaUAP6QZEVsyb3pPnYUUp2I2Hz0J4NmX_cg&usqp=CAU"
                alt=""
              />
            </p>
          </div>
          <form data-aos="fade-right" className="w-full" onSubmit={handleLogin}>
            <div className="card flex-shrink-0 mr-0 lg:mr-16 shadow-2xl bg-[#171717]">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full"
                    />
                    <div
                      className="absolute right-0 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="link link-primary">
                    Register
                  </Link>
                </p>
                <p className="text-error mt-3 text-center">{error}</p>
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
              <div className="divider">OR Login With</div>
              <div className="card-body justify-center mx-auto">
                <div>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-primary mr-3"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    onClick={handleFacebookLogin}
                    className="btn btn-primary mr-3"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="btn btn-primary"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;