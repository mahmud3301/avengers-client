/* eslint-disable react/no-unescaped-entities */
import { Link as ScrollLink } from "react-scroll";
import Gallery from "./Gallery";
import Category from "./Category";
import UseTitle from "../Hooks/UseTitle";
import Inspire from "./Inspire";
import ClientReview from "./ClientReview";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ebayimg.com/images/g/G4sAAOSw6ZBdWHLz/s-l1600.jpg")`,
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-left text-neutral-content lg:mr-auto lg:ml-24">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <h1 className="mb-5 text-5xl font-bold">To Avengers Shop</h1>
            <p className="mb-5">
              In our shop tou can get the latest and good quality's of Avengers
              toys. We are inspired by all marvel avengers like Iron Man, Hulk,
              Captain America, Grout so just explore and enjoy!
            </p>
            <ScrollLink to="gallery" smooth={true} duration={600}>
              <button className="btn btn-primary">Get Started</button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <Gallery />
      <Category />
      <Inspire/>
      <ClientReview/>
    </div>
  );
};

export default Home;
