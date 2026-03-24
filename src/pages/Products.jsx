import React from "react";
import products from "../assets/data.json";

const Products = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>

                <button className="btn btn-primary mt-auto">
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

export default Products;