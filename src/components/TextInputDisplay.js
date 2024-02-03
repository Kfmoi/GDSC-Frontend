// import useState, a React Hook, for components to manage the states
import React, { useState } from "react";

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

};