import { useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import AllToysDetails from "./AllToysDetails";

const AllToys = () => {
  UseTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:7000/all-toys-data")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7000/all-toys-data/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }

  const [selectedToy, setSelectedToy] = useState(null);

  const openModal = (toy) => {
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
      <div className="overflow-x-auto">
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