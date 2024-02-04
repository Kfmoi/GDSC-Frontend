import "./TextOutputDisplay.css";
import React, { useState } from "react";
const TextOutputDisplay = ({ onSave, text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div className="output">
        <div className="column-display">
          <select
            className="input-text"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <div className="output-buttons">
            <button
              onClick={() => onSave(selectedOption)}
              className="output-button"
            >
              Save
            </button>
            <button onClick={handleCopy} className="output-button">
              Copy
            </button>
            <button className="output-button">C</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextOutputDisplay;
