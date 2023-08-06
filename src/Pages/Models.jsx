const Models = () => {
  return (
    <div>
      <div className="px-6 md:px-48 mt-12">
        <h1 data-aos="fade-up" className="mb-12 font-bold text-center text-3xl">
          Owr Best <span className="text-primary">Action Figures</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#f28c18] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/Y3Mk73g/Infinity-War-Iron-Man-Transparent-PNG.png"
              alt="Iron Man"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Spider Man</h1>
            <p className="text-xl text-gray-400">Spider Man</p>
          </div>
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#f28c18] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/ZGkJsDN/Avengers-Infinity-War-Iron-Man-Transparent-PNG.png"
              alt="Iron Man"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Iron Man</h1>
            <p className="text-xl text-gray-400">Iron Man</p>
          </div>
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#f28c18] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/D5vCXJ0/Captain-Marvel-PNG-Transparent-Image.png"
              alt="Captain Marvel"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Captain Marvel</h1>
            <p className="text-xl text-gray-400">Captain Marvel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
