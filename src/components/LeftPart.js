import React from "react";
import "./LeftPart.css";
import pngImage from "../images/pngPicture.png";
import { InputForm } from "./InputForm";

export const LeftPart = (props) => {
  return (
    <div className="leftPart container-fluid">
      <div className="pngImage">
        <img src={pngImage} alt="" />
      </div>
      <div className="appTitle">
        <h1>My-Todo-App</h1>
      </div>
      <p className="describeText">
        This is simple React Todo created as a side project, just to get my hands into basics of react including components structure and props along with some hooks such as useState and useEffect. <br />
        Created by:{" "}
        <span className="specialText">
          <a href="https://github.com/me-ayush-niraula">Ayush Niraula</a>
        </span>
      </p>
      <InputForm inputHandler={props.inputHandler} addHandler={props.addHandler} input={props.input} />
    </div>
  );
};
