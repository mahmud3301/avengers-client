/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import MyToysDetails from "./MyToysDetails";
import Swal from "sweetalert2";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import MyToysUpdate from "./MyToysUpdate";

const MyToys = () => {
  UseTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [selectedUpdateToy, setSelectedUpdateToy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchMyToys = async () => {
      try {
        const response = await fetch(
          `https://avengers-server.vercel.app/my-toys/${user.email}?sort=${sortOrder}`
        );
        const data = await response.json();
        setMyToys(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyToys();
  }, [user, sortOrder]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  const updateOpenModal = (toy) => {
    setSelectedUpdateToy(toy);
  };

  const updateCloseModal = () => {
    setSelectedUpdateToy(null);
  };

  const handleDelete = (toy) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger mr-5",
      },
      buttonsStyling: true,
      background: "#f0efe6",
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://avengers-server-mahmud3301.vercel.app/my-toys/${user.email}`,
            {
              method: "DELETE",
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your item has been deleted.",
                  "success"
                );
                const remaining = myToys.filter((toys) => toys._id !== toy._id);
                setMyToys(remaining);
              } else {
                swalWithBootstrapButtons.fire(
                  "Failed to delete",
                  "An error occurred while deleting the item.",
                  "error"
                );
              }
            })
            .catch((error) => {
              swalWithBootstrapButtons.fire(
                "Failed to delete",
                "An error occurred while deleting the item.",
                "error"
              );
              console.log(error);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your item is safe :)",
            "info"
          );
        }
      });
  };


  const handleUpdate = (id, updatedToy) => {
    fetch(
      `https://avengers-server.vercel.app/my-toys/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( updatedToy ),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedToys = myToys.map((toy) =>
            toy._id === id ? { ...toy, ...updatedToy } : toy
          );
          setMyToys(updatedToys);
          Swal.fire({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger mr-5",
            },
            buttonsStyling: true,
            background: "#f0efe6",
            title: "Updated!",
            text: "Your toy information has been updated.",
            icon: "success",
          });
        } else {
          Swal.fire({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger mr-5",
            },
            buttonsStyling: true,
            background: "#f0efe6",
            title: "Failed to update",
            text: "An error occurred while updating the toy information.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger mr-5",
          },
          buttonsStyling: true,
          background: "#f0efe6",
          title: "Failed to update",
          text: "An error occurred while updating the toy information.",
          icon: "error",
        });
        console.log(error);
      });  
  };

  return (
    <div className="px-16">
      <h1
        data-aos="fade-down"
        className="font-bold text-center mt-12 mb-16 text-3xl">
        My <span className="text-primary">Toys</span>
      </h1>
      {myToys.length > 0 && (
        <div className="text-center mb-16">
          {sortOrder === "asc" ? (
            <>
              <button
                className="btn text-xl font-bold btn-primary mx-auto"
                onClick={() => handleSort("desc")}>
                <BiUpArrowAlt /> High expense
              </button>
              <button
                className="btn text-xl font-bold btn-primary mx-auto mt-3 lg:mt-0 ml-0 lg:ml-3"
                onClick={() => handleSort("asc")}>
                <BiDownArrowAlt /> Low expense
              </button>
            </>
          ) : (
            <>
              <button
                className="btn text-xl font-bold btn-primary mx-auto mr-0 lg:mr-3"
                onClick={() => handleSort("desc")}>
                <BiUpArrowAlt /> High expense
              </button>
              <button
                className="btn text-xl font-bold btn-primary mx-auto mt-3 lg:mt-0"
                onClick={() => handleSort("asc")}>
                <BiDownArrowAlt /> Low expense
              </button>
            </>
          )}
        </div>
      )}

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
            <tbody data-aos="fade-down">
              {myToys.map((toy, index) => (
                <tr key={toy._id}>
                  <th></th>
                  <th>{index + 1}</th>
                  <td className="font-bold">{toy.seller}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>{toy.availableQuantity}</td>
                  <td>
                    <div className="flex justify-center">
                      <button className="btn btn-primary btn-square text-xl">
                        <FiEdit3 onClick={() => updateOpenModal(toy)} />
                      </button>
                      <button
                        className="btn btn-primary btn-square ml-2 text-xl"
                        onClick={() => handleDelete(toy)}>
                        <MdDeleteForever />
                      </button>
                      <button
                        className="btn btn-primary ml-2"
                        onClick={() => openModal(toy)}>
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-2xl">
            You don't have any toys yet.
            <span className="text-primary"> Please add some.</span>
          </p>
        )}
      </div>
      {selectedToy && (
        <MyToysDetails selectedToy={selectedToy} closeModal={closeModal} />
      )}
      {selectedUpdateToy && (
        <MyToysUpdate
          selectedUpdateToy={selectedUpdateToy}
          updateCloseModal={updateCloseModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default MyToys;
