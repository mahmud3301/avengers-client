
const AllToysDetails = ({ selectedToy, closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div id="#toyDetails" className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl lg:max-w-4xl">
            <label
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-primary absolute right-8 top-6">
              ✕
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
              <img
                data-aos="flip-up"
                src={selectedToy.pictureUrl}
                alt={selectedToy.toyName}
                className="rounded-lg shadow-2xl"
              />
              <div
                data-aos="flip-down"
                className="justify-center my-auto ml-5 mt-5 lg:mt-0">
                <h1 className="text-xl">
                  <span className="font-bold">Name: </span>
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
                  <span className="font-bold">Seller: </span>{" "}
                  {selectedToy.seller}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Seller Email: </span>
                  {selectedToy.sellerEmail}
                </h1>
                <h1 className="text-xl mt-3">
                  <span className="font-bold">Quantity: </span>
                  {selectedToy.availableQuantity}
                </h1>
                <p className="mt-3">
                  <span className="font-bold">Description: </span>
                  {selectedToy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToysDetails;
