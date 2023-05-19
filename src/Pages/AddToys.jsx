import UseTitle from "../Hooks/UseTitle";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  UseTitle("Add Toys");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const price = form.elements.price.value;
    const rating = form.elements.rating.value;
    const quantity = form.elements.quantity.value;
    const description = form.elements.description.value;
    const pictureUrl = form.elements.pictureUrl.value;
    const subCategory = form.elements.subCategory.value;
    const sellerName = form.elements.sellerName.value;
    const sellerEmail = form.elements.sellerEmail.value;
    const data = {
      name,
      price,
      rating,
      quantity,
      description,
      pictureUrl,
      subCategory,
      sellerName,
      sellerEmail
    };
    fetch("http://localhost:7000/all-toys-data", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toys Added Successfully",
            background: "#101010",
            showConfirmButton: false,
            timer: 1500
          });
        }
      else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          background: "#101010",
          showConfirmButton: false,
          timer: 1500
        });
      }
      });
  };

  return (
    <div className="container justify-center mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-14 text-center">
          Add A Toy
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="mb-4">
              <label className="label">Picture URL of the toy</label>
              <input
                type="text"
                id="pictureUrl"
                className="input input-bordered input-primary w-full"
                placeholder="Picture URL of the toy"
              />
            </div>
            <div className="mb-4">
              <label className="label">Name</label>
              <input
                type="text"
                id="name"
                className="input input-bordered input-primary w-full"
                placeholder="Name"
              />
            </div>
            {user && (
              <>
                <div className="mb-4">
                  <label className="label">Seller Name</label>
                  <input
                    type="text"
                    id="sellerName"
                    className="input input-bordered input-primary w-full"
                    placeholder="Seller Name"
                    defaultValue={user?.displayName || ""}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label className="label">Seller Email</label>
                  <input
                    type="text"
                    id="sellerEmail"
                    className="input input-bordered input-primary w-full"
                    placeholder="Seller Email"
                    defaultValue={user?.email || ""}
                    disabled
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label className="label">Sub-category</label>
              <input
                type="text"
                id="subCategory"
                className="input input-bordered input-primary w-full"
                placeholder="Sub-category"
              />
            </div>
            <div className="mb-4">
              <label className="label">Price</label>
              <input
                type="text"
                id="price"
                className="input input-bordered input-primary w-full"
                placeholder="Price"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="label">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                className="input input-bordered input-primary w-full"
                placeholder="Rating"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="label">
                Available Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="input input-bordered input-primary w-full"
                placeholder="Available Quantity"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="label">
              Detail Description
            </label>
            <textarea
              id="description"
              className="textarea textarea-bordered textarea-primary w-full"
              placeholder="Detail Description"
            />
          </div>
          <div className="w-100">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;