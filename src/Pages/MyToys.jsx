/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import UseTitle from "../Hooks/UseTitle";
import { AuthContext } from "../Provider/AuthProvider";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const MyToys = () => {
  UseTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:7000/my-toys/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleViewDetails = (toy) => {
    setSelectedToy(toy);
    setIsModalOpen(true);
    console.log('clicked');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-16">
      <h1 className="font-bold text-center mt-12 mb-16 text-3xl">
        My <span className="text-primary">Toys</span>
      </h1>
      <div className="overflow-x-auto">
        {myToys.length > 0 ? (
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
            <tbody>
              {myToys.map((toy, index) => (
                <tr key={toy._id}>
                  <td></td>
                  <td>{index + 1}</td>
                  <td className="font-bold">{toy.seller}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>{toy.availableQuantity}</td>
                  <td>
                    <div className="flex justify-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewDetails(toy)}
                      >
                        View Details
                      </button>
                      <button className="btn btn-primary btn-square ml-2 text-xl">
                        <FiEdit3 />
                      </button>
                      <button className="btn btn-primary btn-square ml-2 text-xl">
                        <MdDeleteForever />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-2xl">
            You don't have any toys yet.{" "}
            <span className="text-primary">Please add some.</span>
          </p>
        )}
      </div>

      {selectedToy && isModalOpen && (
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div>
              <div>
                <img
                  src={selectedToy.pictureUrl}
                  alt={selectedToy.toyName}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-xl">
                  <span className="font-bold">Toy Name: </span>
                  {selectedToy.toyName}
                </h1>
                <h1 className="text-xl mt-8 ">
                  <span className="font-bold">Price: </span> {selectedToy.price}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Ratings: </span>{" "}
                  {selectedToy.rating}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Sub Category: </span>{" "}
                  {selectedToy.subCategory}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Seller: </span>
                  {selectedToy.seller}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Seller Email: </span>
                  {selectedToy.sellerEmail}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Quantity:</span>{" "}
                  {selectedToy.availableQuantity}
                </h1>
                <p className="mt-3">
                  <span className="font-bold">Description:</span>{" "}
                  {selectedToy.description}
                </p>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
