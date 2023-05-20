/* eslint-disable react/no-unescaped-entities */
const TopCollections = () => {
  return (
    <div className="container mx-auto justify-center">
      <h1
        data-aos="fade-down-right"
        className="text-3xl font-bold text-center mb-12">
        Our Best <span className="text-primary">Toys Collections</span>{" "}
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://i.insider.com/5ca0123e92c8860a3a6eaad3?width=1200&format=jpeg")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content mr-auto mt-auto ml-12 mb-36 text-neutral-content">
              <div>
                <p className="text-xl font-bold">
                  Get ready to join Earth's mightiest heroes with our Marvel
                  Avengers toy collection! With highly detailed figures and
                  accessories, you can recreate the epic battles from the movies
                  or create your own heroic scenarios. From Spider-Man's
                  web-slinging skills to the cosmic powers of Captain Marvel,
                  these toys are perfect for imaginative play and display.
                  Collect them all and let your imagination soar as you bring
                  the Marvel Universe to life!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute mb-12 flex justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ytimg.com/vi/DpQdJl6c0UU/maxresdefault.jpg ")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content mr-auto mt-auto ml-12 mb-36 text-neutral-content">
              <div>
                <p className="text-xl font-bold">
                  Calling all Marvel fans! Unleash the power of imagination with
                  our incredible Avengers toy collection. From Iron Man's
                  high-tech armor to Captain America's mighty shield, these
                  action figures bring epic battles to life. Join the Avengers
                  as they protect the world from villains and save the day. Get
                  your hands on these heroic toys now and embark on thrilling
                  adventures!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute mb-12 flex justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://down-ph.img.susercontent.com/file/cb5520ca1c4c8e23d7c5d5afdce1b639")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content mr-auto mt-auto ml-12 mb-36 text-neutral-content">
              <div>
                <p className="text-xl font-bold">
                  Experience the ultimate Marvel Avengers adventure with our
                  extraordinary toy selection! Assemble your own team of heroes,
                  including Thor, Black Widow, and Hulk, and let the battles
                  begin. Each figure is intricately designed, capturing the
                  essence of your favorite characters. Whether you're a
                  collector or a young fan, these toys will ignite your
                  imagination and transport you to the Marvel Universe. Don't
                  miss out on the chance to own these iconic Avengers toys. Grab
                  yours today and let the heroic journey commence!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute mb-12 flex justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url("https://www.gannett-cdn.com/presto/2021/10/23/USAT/fc66b0a6-9de2-4073-b10f-15450a5d2847-Avengers.png")`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content mr-auto mt-auto ml-12 mb-36 text-neutral-content">
              <div>
                <p className="text-xl font-bold">
                  Attention Marvel enthusiasts! Unlock a world of adventure with
                  our Marvel Avengers toy extravaganza. Immerse yourself in the
                  thrilling universe of Iron Man, Thor, and the rest of the
                  heroic squad. With authentic designs and incredible
                  articulation, these action figures are perfect for epic
                  battles and heroic poses. Join the Avengers on their mission
                  to save the world and let your imagination soar to new
                  heights. Don't miss out on this opportunity to own a piece of
                  Marvel magic!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute mb-12 flex justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
