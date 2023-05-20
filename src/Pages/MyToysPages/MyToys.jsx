/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import MyToysDetails from "./MyToysDetails";


const MyToys = () => {
  UseTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/my-toys/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div className="px-16">
      <h1
        data-aos="fade-down"
        className="font-bold text-center mt-12 mb-16 text-3xl"
      >
        My <span className="text-primary">Toys</span>
      </h1>
      <div data-aos="fade-up" className="overflow-x-auto">
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
                        onClick={() => openModal(toy)}
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

      {selectedToy && (
        <MyToysDetails selectedToy={selectedToy} closeModal={closeModal}/>
      )}
    </div>
  );
};

export default MyToys;