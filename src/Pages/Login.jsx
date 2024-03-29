/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup
} from "firebase/auth";
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
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from") || "/";
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/f2/d2/ee/f2d2ee07809be8f0139fb12071bb4d28.gif)"
        }}>
        <div className="hero-overlay bg-primary  bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1
              data-aos="fade-down"
              className="text-5xl font-bold text-center mt-28 mb-28">
              <span className="text-error">Login</span> now!
            </h1>
            <form
              data-aos="fade-right"
              className="w-[33rem] h-[40rem]"
              onSubmit={handleLogin}>
              <div className="card mr-0 lg:mr-16 shadow-2xl bg-base-100 text-base-content">
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
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="link link-error">
                      Register
                    </Link>
                  </p>
                  <p className="text-error mt-3 text-center">{error}</p>
                  <div className="form-control mt-5">
                    <button className="btn btn-error">Login</button>
                  </div>
                </div>
                <div className="divider">OR Login With</div>
                <div className="card-body justify-center mx-auto">
                  <div>
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-error mr-3">
                      <FaGoogle />
                    </button>
                    <button
                      onClick={handleFacebookLogin}
                      className="btn btn-error mr-3">
                      <FaFacebook />
                    </button>
                    <button
                      onClick={handleGithubLogin}
                      className="btn btn-error">
                      <FaGithub />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
