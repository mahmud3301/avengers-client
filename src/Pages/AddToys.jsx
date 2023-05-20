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
        <h2 data-aos="fade-left" className="text-2xl font-bold mt-8 mb-14 text-center">
          Add A <span className="text-primary">Toy</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Picture URL of the toy</label>
              <input
                type="text"
                id="pictureUrl"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Picture URL of the toy"
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Name</label>
              <input
                type="text"
                id="name"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Name"
              />
            </div>
            {user && (
              <>
                <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
                  <label className="label">Seller Name</label>
                  <input
                    type="text"
                    id="sellerName"
                    className="input w-80 md:w-full lg:w-full"
                    required
                    placeholder="Seller Name"
                    defaultValue={user?.displayName || ""}
                    disabled
                  />
                </div>
                <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
                  <label className="label">Seller Email</label>
                  <input
                    type="text"
                    id="sellerEmail"
                    className="input w-80 md:w-full lg:w-full"
                    required
                    placeholder="Seller Email"
                    defaultValue={user?.email || ""}
                    disabled
                  />
                </div>
              </>
            )}
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Sub-category</label>
              <input
                type="text"
                id="subCategory"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Sub-category"
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Price</label>
              <input
                type="text"
                id="price"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Price"
              />
            </div>
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label htmlFor="rating" className="label">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Rating"
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label htmlFor="quantity" className="label">
                Available Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="input w-80 md:w-full lg:w-full"
                required
                placeholder="Available Quantity"
              />
            </div>
          </div>
          <div data-aos="flip-up" className="mb-4 mx-6 lg:mx-0">
            <label htmlFor="description" className="label">
              Detail Description
            </label>
            <textarea
              id="description"
              className="textarea w-full"
              required
              placeholder="Detail Description"
            />
          </div>
          <div className="lg:mx-0 mx-5 w-100">
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