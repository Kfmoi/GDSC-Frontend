import "./TextOutputDisplay.css";
import React, { useState } from "react";
const TextOutputDisplay = ({ onSave, text }) => {

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  // useState function returns array with current state value of the dropdown and function to update it
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div className="output">
        <div className="column-display">
          <select
            className="input-text"
            value={selectedOption}
            // Changes the useState to the value of the dropdown
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <div className="output-buttons">
            <button
            // Calls the handleSave function from the FrontPage component
              onClick={() => onSave(selectedOption.toLowerCase())}
              className="output-button"
            >
              lowercase
            </button>
            <button onClick={() => onSave(selectedOption.toUpperCase())} className="output-button">
              UPPERCASE
            </button>
            <button onClick={() => onSave(toTitleCase(selectedOption))} className="output-button">TitleCase</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextOutputDisplay;
