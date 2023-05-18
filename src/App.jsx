function App() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center">
        <figure>
          <img
            src="https://www.whitehouse.gov/wp-content/uploads/2021/01/03_thomas_jefferson.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
