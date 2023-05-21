import { useContext, useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import AllToysDetails from "./AllToysDetails";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AllToys = () => {
  UseTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  useEffect(() => {
    fetch("https://avengers-server.vercel.app/all-toys-data")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://avengers-server.vercel.app/all-toys-data/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }

  const [selectedToy, setSelectedToy] = useState(null);

  const openModal = (toy) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        background: "#101010",
        text: "You have to log in first to view details",
      }).then(() => {
        navigate(from, { replace: true });
      });
      return;
    }
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div className="px-16">
      <h1
        data-aos="fade-right"
        className="font-bold text-center mt-12 mb-16 text-3xl"
      >
        All <span className="text-primary">Toys</span>
      </h1>
      <div
        data-aos="fade-left"
        className="flex mb-16 mx-auto justify-center w-1/2"
      >
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
          className="input input-bordered border-primary w-40 lg:w-[45%]"
        />
        <button onClick={handleSearch} className="btn btn-primary ml-3">
          <AiOutlineSearch />
        </button>
      </div>
      <div data-aos="" className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Product No.</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody data-aos="fade-left">
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th></th>
                <th>{index + 1}</th>
                <td className="font-bold">{toy.seller}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(toy)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedToy && (
        <AllToysDetails selectedToy={selectedToy} closeModal={closeModal}/>
      )}
    </div>
  );
};

export default AllToys;