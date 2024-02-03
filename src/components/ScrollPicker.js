// just like for the text input display, use a useState hook for managing states
import React, {useState} from "react";

// main function, variable to be used as function for getting letter
const ScrollPicker = ({ onSelect }) => {
    // variable for storing alphabet
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // function for selecting letter
    const handleSelect = (letter) => {
        onSelect(letter);
    };

    return (
        <div>
            
        </div>
    )

};

