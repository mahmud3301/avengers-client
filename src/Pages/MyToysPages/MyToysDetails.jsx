const MyToysDetails = ({ selectedToy, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#101010] rounded-lg shadow-lg p-6">
        <div className="lg:flex justify-center">
          <img
            data-aos="fade-up"
            src={selectedToy.pictureUrl}
            alt={selectedToy.toyName}
            className="rounded-lg shadow-2xl max-w-sm"
          />

          <div data-aos="fade-down" className="ml-0 mt-24 lg:ml-32">
            <h1 className="text-xl">
              <span className="font-bold">Toy Name: </span>
              {selectedToy.toyName}
            </h1>

            <h1 className="text-xl mt-8 ">
              <span className="font-bold">Price: </span> {selectedToy.price}
            </h1>

            <h1 className="text-xl mt-3">
              <span className="font-bold">Ratings: </span> {selectedToy.rating}
            </h1>

            <h1 className="text-xl mt-3">
              <span className="font-bold">Sub Category: </span>
              {selectedToy.subCategory}
            </h1>

            <h1 className="text-xl mt-3">
              <span className="font-bold">Seller: </span>
              {selectedToy.seller}
            </h1>

            <h1 className="text-xl mt-3">
              <span className="font-bold">Seller Email: </span>
              {selectedToy.sellerEmail && selectedToy.sellerEmail.length > 23
                ? selectedToy.sellerEmail.slice(0, 25) + "..."
                : selectedToy.sellerEmail}
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
        <div
          data-aos="fade-up"
          className="mx-auto justify-center text-center mt-12">
          <button className="btn btn-primary" onClick={closeModal}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToysDetails;