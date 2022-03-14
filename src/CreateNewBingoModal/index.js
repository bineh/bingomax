import { useState } from "react";
import "./createnewbingomodal.css";

function CreateNewBingoModal(props) {
  const [settings, setSettings] = useState({
    topic: "initialWords",
    size: "3",
  });
  const { show, buttonClicked } = props;

  function handleSubmit(e) {
    e.preventDefault();
    e.target.style.display = "none";
    console.log("saus und braus", settings);
    buttonClicked(settings);
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("new topic: ", name, value);
    setSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="topic">
          <form onSubmit={handleSubmit}>
            <div className="title">Choose Options</div>
            <label>Choose Topic</label>
            <select onChange={handleChange} value={settings.topic} name="topic">
              <option id="initialWords">mixed</option>
              <option id="traffic">traffic</option>
            </select>
            <div>
              <label>Choose Size</label>
              <select onChange={handleChange} value={settings.size} name="size">
                <option id="3" className="option">
                  3
                </option>
                <option id="tbd2">tbd...</option>
              </select>
            </div>
            <input type="submit" value="Ok" className="submitButton" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewBingoModal;
