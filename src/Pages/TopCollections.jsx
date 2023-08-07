const TopCollections = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage:
            "url(https://i0.wp.com/videojuegos.enriqueortegaburgos.com/wp-content/uploads/2023/01/MARVEL.jpg?fit=768%2C518&ssl=1)"
        }}>
        <div className="hero-overlay bg-primary bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div >
            <h1 className="mb-5 text-5xl font-bold">
              Explore the world of Marvel Toys
            </h1>
            <p className="mb-5">Our most supporter is Marvel Company own</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
              <div>
                <h1 className="text-6xl mb-3 font-bold">1.280K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Partnership
                </p>
              </div>
              <div>
                <h1 className="text-6xl mb-3 font-bold">1.200K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  People Joined
                </p>
              </div>
              <div>
                <h1 className="text-6xl mb-3 font-bold">320K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  User Active
                </p>
              </div>
              <div className="ml-0 md:ml-52 lg:ml-0">
                <h1 className="text-6xl mb-3 font-bold">3.2M</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Earning Month
                </p>
              </div>
              <div className="ml-0 md:ml-64 lg:ml-0">
                <h1 className="text-6xl mb-3 font-bold">900K+</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Toys Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
