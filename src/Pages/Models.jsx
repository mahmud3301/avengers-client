const Models = () => {
  return (
    <div>
      <div className="px-6 md:px-48 mt-12">
        <h1 data-aos="fade-up" className="my-12 font-bold text-center text-3xl">
          Owr Best <span className="text-error">Action Figures</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#dc2626] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/Y3Mk73g/Infinity-War-Iron-Man-Transparent-PNG.png"
              alt="Iron Man"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Spider Man</h1>
            <p className="text-xl text-gray-400">
              Spider-Man, created by Stan Lee and Steve Ditko, is a beloved
              Marvel superhero known for his agility, web-slinging abilities,
              and witty humor.
            </p>
          </div>
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#dc2626] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/ZGkJsDN/Avengers-Infinity-War-Iron-Man-Transparent-PNG.png"
              alt="Iron Man"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Iron Man</h1>
            <p className="text-xl text-gray-400">
              Iron Man, portrayed by Tony Stark, is a genius inventor who dons a
              high-tech suit of armor to become a formidable hero and a founding
              member of the Avengers.
            </p>
          </div>
          <div className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-[#dc2626] rounded-3xl p-8">
            <img
              className="rounded-3xl h-[25rem] w-[90rem]"
              src="https://i.ibb.co/D5vCXJ0/Captain-Marvel-PNG-Transparent-Image.png"
              alt="Captain Marvel"
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">Captain Marvel</h1>
            <p className="text-xl text-gray-400">
              Captain Marvel, alter ego of Carol Danvers, possesses superhuman
              strength, flight, and energy manipulation, becoming a powerful
              cosmic defender in the Marvel Universe.
            </p>
          </div>
        </div>
        <h1 className="my-24 font-bold text-center text-xl">These iconic characters have captivated audiences with <br /> their unique traits, diverse stories, and contributions to the interconnected Marvel universe.</h1>
      </div>
    </div>
  );
};

export default Models;
