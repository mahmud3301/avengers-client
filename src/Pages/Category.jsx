import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../Provider/AuthProvider";

const Category = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const [toysData, setToysData] = useState([]);
  const { user } = useContext(AuthContext);

  const openModal = (toy) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        background: "#101010",
        text: "You have to log in first to view details",
      }).then(() => {
        navigate(from, { replace: true });
      });
      return;
    }

    setSelectedToy(toy);
    setIsModalOpen(true);
  };

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    fetch("http://localhost:7000/toys-data")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  return (
    <div id="/Category" className="container mt-16 mb-24 justify-center text-center mx-auto">
      <div className="justify-center mx-auto text-center">
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList className="tabs justify-center text-center mx-auto">
            <Tab className="tab">Iron Man Toys</Tab>
            <Tab className="tab">Spider Man Toys</Tab>
            <Tab className="tab">Groot Toys</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-3xl font-bold mt-16 mb-12">Iron Man Toys</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
              {toysData[0]?.ironManToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-[#101010]">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">
                        Price: {item.price}
                      </h1>
                      <h1 className="text-xl mt-3 font-bold">
                        Ratings: {item.rating}
                      </h1>
                      <button
                        className="btn btn-primary mt-8"
                        onClick={() => openModal(item)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-3xl font-bold mt-16 mb-12">Spider Man Toys</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 container justify-center mx-auto">
              {toysData[1]?.spiderManToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-[#101010]">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">
                        Price: {item.price}
                      </h1>
                      <h1 className="text-xl mt-3 font-bold">
                        Ratings: {item.rating}
                      </h1>
                      <button
                        className="btn btn-primary mt-8"
                        onClick={() => openModal(item)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-3xl font-bold mt-16 mb-12">Groot Toys</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
              {toysData[2]?.grootToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-[#101010]">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">
                        Price: {item.price}
                      </h1>
                      <h1 className="text-xl mt-3 font-bold">
                        Ratings: {item.rating}
                      </h1>
                      <button
                        className="btn btn-primary mt-8"
                        onClick={() => openModal(item)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {selectedToy && isModalOpen && (
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
      )}
    </div>
  );
};

export default Category;
