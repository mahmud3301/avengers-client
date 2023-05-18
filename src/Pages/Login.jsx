/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-28">Login now!</h1>
      <div className="hero bg-[#000]">
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaUAP6QZEVsyb3pPnYUUp2I2Hz0J4NmX_cg&usqp=CAU"
                alt=""
              />
            </p>
          </div>
          <form>
            <div className="card flex-shrink-0 mr-16 shadow-2xl bg-[#171717]">
              <div className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>
                <p className="mt-4">Don't have an account? <Link to="/register" className="link link-primary">Register</Link></p>
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Login</button>
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
