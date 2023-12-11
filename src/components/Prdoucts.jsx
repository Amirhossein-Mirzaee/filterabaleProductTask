import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/products.css";
const Prdoucts = ({ uiData }) => {
  return (
    <section className="conatiner overflow-hidden">
      <div className="row">
        {uiData.map((item) => (
          <div
            className="col-md-5 col-lg-4 mx-auto align-items-center  p-md-2 "
            key={item.id}
          >
            <div className="card col p-sm-4 overflow-hidden ">
              <div
                className="d-flex align-items-center justify-content-center col "
                style={{ height: "150px" }}
              >
                <LazyLoadImage
                  className="card-img"
                  src={item.images[2]}
                  alt={item.id}
                  style={{ maxWidth: "470px" }}
                />
              </div>
              <div className="card-body text-center h3 ">
                <p
                  id="title"
                  className="card-title h2 text-nowrap d-flex justify-content-center p-2"
                >
                  {item.title}
                </p>
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
