import Marquee from "react-fast-marquee";

const ClientReview = () => {
  return (
    <div className="container mx-auto justify-center">
        <h3 className="text-3xl font-bold text-center mt-24 mb-12">Clients <span className="text-primary">Review</span></h3>
      <Marquee pauseOnHover={true} pauseOnClick={true} gradientColor={true}>
        <div className="card w-96 h-96 text-center m-5 bg-[#101010] shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold">Jhon dae</h2>
            <p>I love Avengers so much in this store i got the most quality avengers toy product</p>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1684467414~exp=1684468014~hmac=3a87e353c5c7e4de6117618dc607e35b59eebaaf93ccb33ce884125a2849d2d7"
              alt="Reviewed by a man"
            />
          </figure>
        </div>
        <div className="card w-96 h-96 text-center m-5 bg-[#101010] shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold">Olivia Martinez</h2>
            <p>I so happy to get this all avengers quality product</p>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=900&t=st=1684467420~exp=1684468020~hmac=7963b23d3d9f2099cb8dec9cec3aee5e39ef1aa90a28c5e642ec217a6feba74a"
              alt="Reviewed by a man"
            />
          </figure>
        </div>
        <div className="card w-96 h-96 text-center m-5 bg-[#101010] shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold">Victoria</h2>
            <p>The toys of this store is god blessing awesome</p>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/free-photo/friendly-smiling-brunette-woman-ready-help-assist-holding-hands-together-looking-pleasant-standing-t-shirt-against-white-background_176420-45398.jpg?size=626&ext=jpg&uid=R97912634&ga=GA1.2.594310104.1684310810&semt=sph"
              alt="Reviewed by a man"
            />
          </figure>
        </div>
        <div className="card w-96 h-96 text-center m-5 bg-[#101010] shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold">John JR.</h2>
            <p>The products just make me impress how awesome the product of this store I cannot explain</p>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1684467428~exp=1684468028~hmac=61ee4cf6401df328dcd8c4673e4a4bb698c99e4eeefb0b6d932198f3c0624b3b"
              alt="Reviewed by a man"
            />
          </figure>
        </div>
        <div className="card w-96 h-96 text-center m-5 bg-[#101010] shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold">Ema</h2>
            <p>The every product of the avengers toys I buy from this store the quality of the product is awesome</p>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/premium-photo/young-woman-student-backpack-hold-pc-isolated-blue-wall-background-studio-portrait-education-high-school-university-college-concept_231208-14294.jpg?size=626&ext=jpg&uid=R97912634&ga=GA1.2.594310104.1684310810&semt=sph"
              alt="Reviewed by a man"
            />
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientReview;
