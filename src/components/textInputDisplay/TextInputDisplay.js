// import useState, a React Hook, for components to manage the states
import React, { useState } from "react";
import './TextInputDisplay.css';

import ScrollPicker from "../scrollPicker/ScrollPicker";

// main function 
const TextInputDisplay = () => {

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

    // copying from display to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const addLetter = (letter) => {
        setText(text + letter);
    };


    // finally, the return statement with the actual display
    return (
        <div className="input-card">
            <div className="column-display">
            <input className="input-text" type = "text" value={text} readOnly placeholder='Input Text'/> {/* should we make this readOnly? */}
            <button className="copy" onClick={handleCopy}>Copy to clipboard</button>
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