import { Link } from "react-router-dom";
import UseTitle from "../Hooks/UseTitle";

const Error = () => {
  UseTitle("Page Not Found");
  return (
    <div className="bg-[#000] py-[5%] items-center min-h-screen">
      <div>
        <img
          className="mx-auto justify-center items-center mt-[55%] lg:mt-0"
          src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="btn btn-error ml-[33%] lg:ml-[46%]">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
