import { useEffect } from "react";
import UseTitle from "../Hooks/UseTitle";
import { useState } from "react";

const AllToys = () => {
  UseTitle("All Toys");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/all-toys-data")
      .then((res) => res.json())
      .then((data) => setToys(data));
  });
  return (
    <div className="px-16">
      <h1
        data-aos="fade-right"
        className="font-bold text-center mt-12 mb-16 text-3xl">
        All <span className="text-primary">Toys</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy.id}>
                <th>{toy.id}</th>
                <td className="font-bold">{toy.seller}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <button className="btn btn-primary">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
