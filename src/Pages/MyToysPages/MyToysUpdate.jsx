import { useState } from "react";

const MyToysUpdate = ({
  updateCloseModal,
  selectedUpdateToy,
  handleUpdate,
}) => {
  const [toyData, setToyData] = useState({
    _id: selectedUpdateToy._id,
    pictureUrl: selectedUpdateToy.pictureUrl,
    name: selectedUpdateToy.name,
    subCategory: selectedUpdateToy.subCategory,
    price: selectedUpdateToy.price,
    rating: selectedUpdateToy.rating,
    quantity: selectedUpdateToy.quantity,
    description: selectedUpdateToy.description,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(toyData);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setToyData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl lg:max-w-4xl">
            <label
              onClick={updateCloseModal}
              className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
              ✕
            </label>
            <div className="container justify-center mx-auto p-12">
              <div>
                <h2
                  data-aos="fade-left"
                  className="text-2xl font-bold mt-8 mb-14 text-center">
                  Update <span className="text-primary">Toy</span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
                      <label className="label">Price</label>
                      <input
                        type="number"
                        id="price"
                        className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                        required
                        placeholder="Price"
                        value={toyData.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
                      <label className="label">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                        required
                        placeholder="Quantity"
                        value={toyData.quantity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
                    <label className="label">Description</label>
                    <textarea
                      id="description"
                      className="textarea input-bordered border-primary w-80 md:w-full lg:w-full"
                      required
                      placeholder="Description"
                      value={toyData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => handleUpdate(toyData)}
                      type="submit"
                      className="btn btn-primary mx-auto w-48 md:w-full lg:w-full">
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
