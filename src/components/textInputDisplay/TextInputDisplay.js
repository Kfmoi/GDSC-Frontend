// import useState, a React Hook, for components to manage the states
import React, { useState } from "react";
import './TextInputDisplay.css';

import ScrollPicker from "../scrollPicker/ScrollPicker";

// main function
const TextInputDisplay = ( {onSave} ) => {

    // same function as in the TextOutputDisplay component
    // should move instead of copying
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

    // useState function returns array with current state value and function to update it
    const [text, setText] = useState('');

    // function for backspace
    const handleBackspace = () => {
        setText(text.slice(0, text.length-1));
    };

    // clearing display
    const handleClear = () => {
        setText('');
    };


    const addLetter = (letter) => {
        setText(text + letter);
    };


    // finally, the return statement with the actual display
    return (
        <div className="input-card">
            <div className="row-display">
            <input className="input-text" type = "text" value={text} readOnly placeholder='Input Text'/> {/* should we make this readOnly? */}
            </div>
            <div className='output-buttons'>
            <div className="output-buttons">
            <button
            // Calls the handleSave function from the FrontPage component
              onClick={() => onSave(text.toLowerCase())}
              className="output-button"
            >
              +abc
            </button>
            <button onClick={() => onSave(text.toUpperCase())} className="output-button">
              +ABC
            </button>
            <button onClick={() => onSave(toTitleCase(text))} className="output-button">+Abc</button>
          </div>
        </div>

            <div className="option-buttons">
                <button className="delete" onClick={handleBackspace}>Backspace</button>
                <button className="delete" onClick={handleClear}>Clear</button>
            </div>

            <ScrollPicker onSelect={addLetter}/>

        </div>
    );

};

export default TextInputDisplay;
