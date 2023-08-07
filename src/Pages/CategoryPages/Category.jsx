import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Provider/AuthProvider";
import CategoryDetails from "./CategoryDetails";

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
        background: "#f0efe6",
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
    <div
      id="/category"
      className="container mt-16 mb-24 justify-center text-center mx-auto">
      <h1 data-aos="fade-up" className="mb-12 font-bold text-3xl">
        Shop By <span className="text-error">Category</span>
      </h1>
      <div className="justify-center mx-auto text-center">
        <Tabs
          activeClassName=""
          selectedIndex={selectedTab}
          onSelect={handleTabSelect}>
          <TabList className="tabs justify-center text-center mx-auto">
            <Tab data-aos="zoom-in-left" className="tab">
              Iron Man Toys
            </Tab>
            <Tab data-aos="zoom-in-left" className="tab">
              Spider Man Toys
            </Tab>
            <Tab data-aos="zoom-in-left" className="tab">
              Groot Toys
            </Tab>
          </TabList>
          <TabPanel>
            <h2 className="text-2xl font-bold mt-16 mb-12">
              Iron Man <span className="text-error">Toys</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
              {toysData[0]?.ironManToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-base-200">
                  <div
                    data-aos="zoom-in-right"
                    className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-100 lg:max-w-sm rounded-lg shadow-2xl"
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
                        className="btn btn-error mt-8"
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
            <h2 className="text-2xl font-bold mt-16 mb-12">
              Spider Man <span className="text-error">Toys</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 container justify-center mx-auto">
              {toysData[1]?.spiderManToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-base-200">
                  <div
                    data-aos="zoom-in-right"
                    className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-100 lg:max-w-sm rounded-lg shadow-2xl"
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
                        className="btn btn-error mt-8"
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
            <h2 className="text-2xl font-bold mt-16 mb-12">
              Groot <span className="text-error">Toys</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
              {toysData[2]?.grootToys?.map((item, index) => (
                <div key={index} className="hero rounded-2xl bg-base-200">
                  <div
                    data-aos="zoom-in-right"
                    className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="max-w-100 lg:max-w-sm rounded-lg shadow-2xl"
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
                        className="btn btn-error mt-8"
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
        <CategoryDetails
          selectedToy={selectedToy}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Category;
