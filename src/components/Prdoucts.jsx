const Prdoucts = ({ data }) => {
  return (
    <section className="conatiner">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4 p-3" key={item.id}>
            <div className="card col p-5">
              <div
                className="d-flex align-items-center justify-content-center col"
                style={{ height: "150px" }}
              >
                <img className="card-img" src={item.images[1]} alt={item.id} />
              </div>
              <div className="card-body text-center h3 ">
                <p className="card-title h2 ">{item.title}</p>
                <p className="card-text">{item.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prdoucts;
