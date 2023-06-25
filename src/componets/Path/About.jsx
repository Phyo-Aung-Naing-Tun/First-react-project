import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = ({ addingProducts }) => {
  const nav = useNavigate();
  const inputRef = useRef();
  const hundleBtn = (e) => {
    nav("/contant", {
      state: { text: inputRef.current[0].value, hi: inputRef.current[1].value },
    });
    e.preventDefault();
    inputRef.current[0].value = null;
    inputRef.current[1].value = null;
  };
  return (
    <div>
      <h1>About</h1>
      <form ref={inputRef} action="#">
        <div>
          <label htmlFor="">Title</label>
          <input type="text" className="form-control-sm" />
        </div>
        <input type="text" className="form-control-sm" />
        <button onClick={hundleBtn} className="btn btn-primary">
          To Contant
        </button>
      </form>
    </div>
  );
};

export default About;
