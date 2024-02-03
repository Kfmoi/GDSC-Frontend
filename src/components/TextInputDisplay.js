// import useState, a React Hook, for components to manage the states
import React, { useState } from "react";
import './TextInputDisplay.css';

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

    }

    // finally, the return statement with the actual display
    return (
        <div className="input-card">
            <input className="input-text" type = "text" value={text} /> {/* should we make this readOnly? */}
            <div className="option-buttons">
                <button onClick={handleBackspace}>Backspace</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleCopy}>Copy to clipboard</button>
            </div>
        </div>
    );

};

export default TextInputDisplay;