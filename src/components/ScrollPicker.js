// just like for the text input display, use a useState hook for managing states
import React, {useState} from "react";

// main function, variable to be used as function for getting letter
const ScrollPicker = ({ onSelect }) => {
    // variable for storing alphabet
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // state hook for the state of current letter in scroll picker
    const [letterIdx, setLetterIdx] = useState(0);

    // make functions for scrolling up, down, and selecting
    const handleScrollUp = () => {
        if (letter > 0) setLetterIdx(letterIdx-1);
        else setLetterIdx(alphabet.length-1);
    };

    const handleScrollDown = () => {
        if (letter < alphabet.length) setLetterIdx(letterIdx+1);
        else setLetterIdx(0);
    };

    const handleSelect = (letter) => {
        const currLetter = alphabet[letterIdx];
        onSelect(currLetter);
    };

    return (
        <div>
            {/* maps each letter in alphabet list to letter selected */}
           { alphabet.map((letter) => (
                <button key = {letter} onClick = {() => handleSelect(letter)}>
                    {letter}
                </button>
           ))} 
        </div>
    )

};

export default ScrollPicker;