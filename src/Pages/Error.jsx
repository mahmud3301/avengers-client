import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-[#000] py-[5%] items-center">
      <div>
        <img
          className="mx-auto justify-center items-center"
          src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="btn btn-primary ml-[46%]">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
