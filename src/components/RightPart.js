import React from "react";
import "./RightPart.css";

export const RightPart = (props) => {
  const renderr = props.todo.map((eachElement) => {
    return (
      <div className="todoStyle container-fluid">
        <div className="row">
          <div className="col-8"> {eachElement.name}</div>
          <div className="col-4">
            <button onClick={() => props.deleteMe(eachElement.id)}>Done</button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="rightPart container-fluid">{renderr}</div>;
};
