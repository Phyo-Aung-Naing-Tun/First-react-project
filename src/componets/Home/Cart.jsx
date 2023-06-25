import React from "react";
import Btnadd from "./Btnadd";
import PropTypes from "prop-types";

const Cart = ({ id, img, title, description }) => {
  // console.log(id, img, title, description);

  return (
    <div key={id} className="col mb-4 ">
      <div className="card p-3" style={{ width: " 230px" }}>
        <img
          src={img}
          className="card-img-top object-fit-contain"
          style={{ width: "100% ", height: "150px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text text-truncate">{description}</p>
          <Btnadd />
        </div>
      </div>
    </div>
  );
};

export default Cart;
