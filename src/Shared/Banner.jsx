

const Banner = ({ imageUrl, title }) => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
