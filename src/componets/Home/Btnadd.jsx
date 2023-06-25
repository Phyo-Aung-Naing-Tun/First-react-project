import React, { useState } from "react";

const Btnadd = () => {
  const [toggle, setToggle] = useState(true);
  const hundleBtn = (e) => {
    e.preventDefault();
    setToggle((pv) => !pv);
  };
  return (
    <>
      <button
        onClick={hundleBtn}
        className={
          toggle
            ? "btn btn-primary w-100 d-block mx-auto"
            : "btn btn-danger d-block mx-auto"
        }
      >
        {toggle ? "Add to Cart" : "Remove from Cart"}
      </button>
    </>
  );
};

export default Btnadd;
