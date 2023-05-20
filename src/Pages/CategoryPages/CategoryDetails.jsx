

const CategoryDetails = ({selectedToy, setIsModalOpen}) => {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
                <img
                  src={selectedToy.picture}
                  alt={selectedToy.name}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="justify-center my-auto">
                  <h1 className="text-xl">
                  <span className="font-bold">Name: </span>{selectedToy.name}
                  </h1>
                  <h1 className="text-xl mt-8 ">
                  <span className="font-bold">Price: </span> {selectedToy.price}
                  </h1>
                  <h1 className="text-xl mt-3">
                  <span className="font-bold">Ratings: </span> {selectedToy.rating}
                  </h1>
                  <h1 className="text-xl mt-3">
                  <span className="font-bold">Seller: </span>{selectedToy.sellerName}
                  </h1>
                  <h1 className="text-xl mt-3">
                  <span className="font-bold">Seller Email: </span>{selectedToy.sellerEmail}
                  </h1>
                  <h1 className="text-xl mt-3">
                  <span className="font-bold">Quantity:</span> {selectedToy.quantity}
                  </h1>
                  <p className="mt-3"><span className="font-bold">Description:</span> {selectedToy.description}</p>
                </div>
              </div>
              <button
                className="modal-close btn btn-primary mt-16"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CategoryDetails;