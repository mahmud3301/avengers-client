import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToysUpdate = ({
  updateCloseModal,
  selectedUpdateToy,
  handleUpdate,
}) => {
  const [toyData, setToyData] = useState({
    _id: selectedUpdateToy._id || "",
    pictureUrl: selectedUpdateToy.pictureUrl || "",
    name: selectedUpdateToy.name || "",
    subCategory: selectedUpdateToy.subCategory || "",
    price: selectedUpdateToy.price || "",
    rating: selectedUpdateToy.rating || "",
    availableQuantity: selectedUpdateToy.availableQuantity || "",
    description: selectedUpdateToy.description || "",
  });

  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(toyData._id, toyData);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setToyData((prevState) => ({
      ...prevState,
      [id]: id === "availableQuantity" ? Number(value) : value,
    }));
  };  

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl lg:max-w-4xl">
            <label
              onClick={updateCloseModal}
              className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="container justify-center mx-auto p-12">
              <div>
                <h2
                  data-aos="fade-left"
                  className="text-2xl font-bold mt-8 mb-14 text-center"
                >
                  Update <span className="text-error">Toy</span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <input
                      type="text"
                      id="sellerName"
                      className="input w-80 md:w-full lg:w-full"
                      required
                      placeholder="Seller Name"
                      value={user?.displayName || ""}
                      disabled
                    />
                    <input
                      type="text"
                      id="sellerEmail"
                      className="input w-80 md:w-full lg:w-full"
                      required
                      placeholder="Seller Email"
                      value={user?.email || ""}
                      disabled
                    />
                    <div
                      data-aos="fade-down"
                      className="mb-4 ml-6 lg:ml-0"
                    >
                      <label className="label">Price</label>
                      <input
                        type="number"
                        id="price"
                        className="input input-bordered border-error w-80 md:w-full lg:w-full"
                        required
                        placeholder="Price"
                        value={toyData.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div
                      data-aos="fade-down"
                      className="mb-4 ml-6 lg:ml-0"
                    >
                      <label className="label">Quantity</label>
                      <input
                        type="number"
                        id="availableQuantity"
                        className="input input-bordered border-error w-80 md:w-full lg:w-full"
                        required
                        placeholder="Quantity"
                        defaultValue={toyData.availableQuantity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="mb-4 ml-6 lg:ml-0"
                  >
                    <label className="label">Description</label>
                    <textarea
                      id="description"
                      className="textarea input-bordered border-error w-80 md:w-full lg:w-full"
                      required
                      placeholder="Description"
                      value={toyData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="btn btn-error mx-auto w-48 md:w-full lg:w-full"
                    >
                      Update Toy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToysUpdate;