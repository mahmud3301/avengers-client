const Inspire = () => {
  return (
    <div className="container mx-auto justify-center">
      <h1 className="text-3xl font-bold text-center mb-12">
        Our <span className="text-primary">Inspirations</span>{" "}
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://images.thedirect.com/media/article_full/mcu-watch-order-marvel-studios-first-time_pR7gM4t.jpg")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Marvel Studio</h1>
                <p className="mb-5">
                  Marvel movies is our best inspirations because there movies
                  and characters give us a lots of idea to make toys
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg ")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Marvel Studio</h1>
                <p className="mb-5">
                  Marvel Avengers team is our best inspirations because there movies and characters give us a lots of idea to make toys
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://bgr.com/wp-content/uploads/2019/03/avengers-endgame-sign-2.jpg?quality=82&strip=all&w=1020&h=574&crop=1")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Marvel Studio</h1>
                <p className="mb-5">
                  Marvel Avengers infinity war movie team is our best inspirations because there movies and characters give us a lots of idea to make toys
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/marvel-1676501297.jpeg")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Marvel Studio</h1>
                <p className="mb-5">
                  Marvel movie the age of Altron is our best inspirations because there movies and characters give us a lots of idea to make toys
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
