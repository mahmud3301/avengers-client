import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import UseTitle from "../Hooks/UseTitle";

const Register = () => {
  UseTitle("Register");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      const { displayName, photoURL } = auth.currentUser;
      if (displayName && photoURL) {
        navigate(from, { replace: true });
      }
    }
  }, [auth.currentUser, navigate, from]);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) {
      setError("Please fill in all the fields");
      return;
    }
    if (password.length < 6) {
      setErrorMassage("Password must be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateProfile(createdUser, { displayName: name, photoURL: url })
          .then(() => {
            console.log("Profile updated!");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleRegister = () => {
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

  const handleFacebookRegister = () => {
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

  const handleGithubRegister = () => {
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
            "url(https://media.tenor.com/OyVcTJ6QTt8AAAAC/marvel-marvel-studios.gif)"
        }}>
        <div className="hero-overlay bg-primary  bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1
              data-aos="fade-down"
              className="text-5xl font-bold text-center mt-28 mb-28">
              <span className="text-error">Register</span> now!
            </h1>
            <form
              data-aos="fade-left"
              className="w-[33rem] h-[40rem]"
              onSubmit={handleRegister}>
              <div className="card flex-shrink-0 mr-0 lg:mr-16 shadow-2xl bg-base-100 text-base-content">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="url"
                      name="url"
                      placeholder="Photo Url"
                      className="input input-bordered"
                    />
                  </div>
                  <p className="mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-error">
                      Login
                    </Link>
                  </p>
                  <div className="text-center mt-3 mb-3">
                    <p className="text-error">{error}</p>
                    <p className="text-error">{errorMassage}</p>
                  </div>
                  <div className="form-control mt-5">
                    <button className="btn btn-error">Register</button>
                  </div>
                </div>
                <div className="divider">OR Register With</div>
                <div className="card-body justify-center mx-auto">
                  <div>
                    <button
                      onClick={handleGoogleRegister}
                      className="btn btn-error mr-3">
                      <FaGoogle></FaGoogle>
                    </button>
                    <button
                      onClick={handleFacebookRegister}
                      className="btn btn-error mr-3">
                      <FaFacebook></FaFacebook>
                    </button>
                    <button
                      onClick={handleGithubRegister}
                      className="btn btn-error">
                      <FaGithub></FaGithub>
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

export default Register;
