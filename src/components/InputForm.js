import "./InputForm.css";
export const InputForm = (props) => {
  return (
    <div className="container-fluid inputForm">
      <div className="row">
        <div className="row">
          <input value={props.input} type="text" className="inputBox" onChange={props.inputHandler} />
        </div>
        <div className="row buttonRow">
          <div className="col addButton">
            <button onClick={props.addHandler}>Add</button>
          </div>
          <div className="col removeAll">
            <button>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
};
