import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isBlur, setIsBlur] = useState(true);

  useEffect(() => {
    fetch("https://avengers-server.vercel.app/image-gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        setTimeout(() => {
          setIsBlur(false);
        }, 4000);
      });
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div id="gallery">
      <div className="p-8 container justify-center mx-auto">
        <div>
          <h2 data-aos="flip-left" className="text-3xl font-bold text-center mb-24 mt-11">
            Our Top Avenger <span className="text-primary">Toys</span>
          </h2>
          <div data-aos="zoom-in-up" className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-4 ">
            {galleryData?.slice(0, showAll ? 12 : 8).map((image) => (
              <LazyLoad key={image._id}>
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className={`w-full h-96 rounded p-4 ${isBlur ? "blur" : ""}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded">
                    <p className="text-white text-lg font-bold">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </LazyLoad>
            ))}
          </div>
          {!showAll && (
            <div className="text-center">
              <span onClick={handleShowAll}>
                <button className="btn btn-primary mt-16">See More</button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;