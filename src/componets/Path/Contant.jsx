import React from "react";
import { useLocation } from "react-router-dom";

const Contant = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Contant</h1>
      <p>{location.state?.text} </p>
      <p>{location.state?.hi}</p>
    </div>
  );
};

export default Contant;
