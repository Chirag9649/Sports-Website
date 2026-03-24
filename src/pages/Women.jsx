import React from "react";
import womens from "../assets/womens.json";

const Women = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Women's Collection</h2>

      <div className="row">
        {womens.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>

                <button className="btn btn-danger mt-auto">
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;