import { ImFacebook, ImGithub, ImYoutube } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#101010] text-neutral-content">
        <div className="md:ml-64">
          <NavLink to="/" className="mt-1 ml-3">
            <div className="rounded-full">
              <img className="w-[50%]"
                src="https://cdn.iconscout.com/icon/free/png-256/free-marvel-282124.png?f=webp"
                alt=""
              />
            </div>
          </NavLink>
          <p>
            Mahmud InIndustries Ltd.
            <br />
            Providing reliable tech since 2021
          </p><br />
          <p>
            <span className="footer-title">Address</span>
            <div className="lg:flex grid grid-cols-1 md:grid-cols-3 mt-2">
              <p className="mr-3">Butler, PA</p>
              <p className="mr-3">1234 Main St</p>
              <p>New York, NY</p>
            </div>
          </p>
        </div>
        <div>
          <span className="footer-title mt-0 lg:mt-[66%]">Social</span>
          <div className="grid grid-flow-col gap-0">
            <div className="btn-circle text-xl">
              <a href="https://www.facebook.com/mahmudulhasan13.1.8.9">
                <ImFacebook />
              </a>
            </div>
            <div className="btn-circle text-xl">
              <a href="https://github.com/mahmud3301">
                <ImGithub />
              </a>
            </div>
            <div className="btn-circle text-xl">
              <a href="https://www.youtube.com/@programmer-mahmud">
                <ImYoutube />
              </a>
            </div>
          </div>
          <span className="footer-title">Contact</span>
          <p>Complex Head: 0123-456-789</p>
          <p>Manager: 0123-456-789</p>
          <p>Cashier: 0123-456-789</p>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#101010] text-base-content">
        <div>
          <p>
            Copyright © 2023 -
            All rights reserved by Mahmud Industries Ltd
          </p>
        </div><br /><br />
      </footer>
    </div>
  );
};

export default Footer;