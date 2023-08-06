import { useContext, useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AllToysDetails from "./AllToysDetails";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SubscribeUs from "../../Shared/SubscribeUs";
// import Banner from "../../Shared/Banner";

const AllToys = () => {
  UseTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(
      "https://avengers-server-mahmud3301.vercel.app/all-toys-data?limit=20"
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      `https://avengers-server-mahmud3301.vercel.app/all-toys-data/${searchText}?limit=20`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const [selectedToy, setSelectedToy] = useState(null);

  const openModal = (toy) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        background: "#f0efe6",
        text: "You have to log in first to view details"
      }).then(() => {
        navigate(`/login?from=${encodeURIComponent(location.pathname)}`, {
          replace: true
        });
      });
      return;
    }
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div>
      {/* <Banner
        imageUrl={
          "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/marvel-chromebook-wallpaper.jpg"
        }
        title={"All Toys"}
      /> */}
      <div>
        <div
          className="hero min-h-screen bg-fixed"
          style={{
            backgroundImage: `url(https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/marvel-chromebook-wallpaper.jpg)`
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div>
              <h1 className="mb-7 text-5xl font-bold">All Toys</h1>
              <h1 className="mb-4 text-xl font-medium">Search found and buy your own favorite marvel toys</h1>
              <div
                data-aos="fade-down"
                className="flex w-full">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  placeholder="Search the toy that you want..."
                  className="input input-bordered border-blue-300 shadow-2xl shadow-blue-500/50 w-40 lg:w-[60rem]"
                />
                <button onClick={handleSearch} className="p-4 bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 rounded-xl ml-3">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-36 justify-center mx-auto mt-44">
        {toys.map((toy) => (
          <div key={toy._id} className="card w-full bg-base-300 shadow-3xl">
            <figure>
              <img
                className="h-[40rem] w-[60rem]"
                src={toy.pictureUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>Seller: {toy.seller}</p>
              <p>Toy Name: {toy.toyName}</p>
              <p>Category: {toy.subCategory}</p>
              <p>Price: ${toy.price}</p>
              <p>Available Quantity: {toy.availableQuantity}</p>
              <p></p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary mt-8"
                  onClick={() => openModal(toy)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SubscribeUs/>

      {selectedToy && (
        <AllToysDetails selectedToy={selectedToy} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AllToys;
