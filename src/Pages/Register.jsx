import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Register = () => {
  const auth = getAuth(app);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, url, email, password);

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
        console.log(createdUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
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
      <h1 className="text-5xl font-bold text-center mt-28">Register now!</h1>
      <div className="hero bg-[#000] mb-24">
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="w-full h-full">
              <img
                className="w-96 mb-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaUAP6QZEVsyb3pPnYUUp2I2Hz0J4NmX_cg&usqp=CAU"
                alt=""
              />
            </p>
          </div>
          <form className="w-full" onSubmit={handleRegister}>
            <div className="card flex-shrink-0 mr-0 lg:mr-16 shadow-2xl bg-[#171717]">
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
                  <Link to="/login" className="link link-primary">
                    Login
                  </Link>
                </p>
                <div className="text-center mt-3 mb-3">
                  <p className="text-error">{error}</p>
                  <p className="text-error">{errorMassage}</p>
                </div>
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
              <div className="divider">OR Register With</div>
              <div className="card-body justify-center mx-auto">
                <button
                  onClick={handleGoogleRegister}
                  className="btn btn-primary">
                  <FaGoogle></FaGoogle>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
