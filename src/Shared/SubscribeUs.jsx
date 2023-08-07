import { useState } from "react";
import Swal from "sweetalert2";

const SubscribeUs = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    Swal.fire({
      icon: "success",
      title: "Subscribe Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="px-6 md:px-24 mt-24 text-white">
      <div className="bg-red-600 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 mt-12 lg:ml-5">
            <h1 className="text-5xl font-bold">Enjoy with subscribing us</h1>
            <p className="mt-16 text-xl font-medium">
              Become a Marvel Insider today and unlock a world of superhero
              excitement! Our subscription service offers you the ultimate
              access to the Marvel universe. As a subscriber, you will receive
              exclusive benefits, including early access to new toy releases,
              limited-edition collectibles, and rare finds that are not
              available to the general public. Immerse yourself in the Marvel
              experience with our carefully curated monthly packages, filled
              with action figures, playsets, and other fantastic merchandise
              featuring your favorite characters from the movies and comics.
              Join the league of dedicated fans and be the first to know about
              upcoming events, special offers, and exclusive contests. Subscribe
              now and embark on an epic journey into the Marvel multiverse!
            </p>
            <div className="join mt-8">
              <input
                required
                id="emailInput"
                type="email"
                className="input input-bordered w-24 md:w-96 join-item rounded-full"
                placeholder="Your Email Here"
                value={email}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-accent ml-5 rounded-full join-item rounded-r-full"
                onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl my-8 w-[96%] ml-2 md:ml-6"
              src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
