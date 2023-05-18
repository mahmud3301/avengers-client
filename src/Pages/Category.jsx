import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("tabtoys.json")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  return (
    <div className="container mt-16 mb-24 justify-center text-center mx-auto">
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
              {toysData?.ironManToys?.map((item, index) => (
                <div
                  key={index}
                  className="hero rounded-2xl bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">Price: {item.price}</h1>
                      <h1 className="text-xl mt-3 font-bold">Ratings: {item.rating}</h1>
                      <button className="btn btn-primary mt-8">
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
              {toysData?.spiderManToys?.map((item, index) => (
                <div
                  key={index}
                  className="hero rounded-2xl bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">Price: {item.price}</h1>
                      <h1 className="text-xl mt-3 font-bold">Ratings: {item.rating}</h1>
                      <button className="btn btn-primary mt-8">
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
              {toysData?.grootToys?.map((item, index) => (
                <div
                  key={index}
                  className="hero rounded-2xl bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item.picture}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{item.name}</h1>
                      <h1 className="text-xl mt-8 font-bold">Price: {item.price}</h1>
                      <h1 className="text-xl mt-3 font-bold">Ratings: {item.rating}</h1>
                      <button className="btn btn-primary mt-8">
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
    </div>
  );
};

export default Category;
