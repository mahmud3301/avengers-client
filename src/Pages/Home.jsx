/* eslint-disable react/no-unescaped-entities */
import { Link as ScrollLink } from "react-scroll";
import Gallery from "./Gallery";
import Category from "./CategoryPages/Category";
import UseTitle from "../Hooks/UseTitle";
import TopCollections from "./TopCollections";
import ClientReview from "./ClientReview";
import Faq from "../Shared/Faq";
import SubscribeUs from "../Shared/SubscribeUs";
import Models from "./Models";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ebayimg.com/images/g/G4sAAOSw6ZBdWHLz/s-l1600.jpg")`
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div
          className="hero-content text-left text-neutral-content lg:mr-auto lg:ml-24"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
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
      <TopCollections />
      <ClientReview />
      <Models />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default Home;
