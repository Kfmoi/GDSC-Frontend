// just like for the text input display, use a useState hook for managing states
import React, { useState } from "react";
import "./ScrollPicker.css";

// main function, variable to be used as function for getting letter
const ScrollPicker = ({ onSelect }) => {
  // variable for storing alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // state hook for the state of current letter in scroll picker
  const [letterIdx, setLetterIdx] = useState(0);

  // make functions for scrolling up, down, and selecting
  const handleScrollUp = () => {
    // if (letterIdx > 0) setLetterIdx(letterIdx - 1);
    // else setLetterIdx(alphabet.length - 1);
    setLetterIdx((letterIdx + alphabet.length - 1) % alphabet.length);
  };

  const handleScrollDown = () => {
    setLetterIdx((letterIdx + alphabet.length + 1) % alphabet.length);
  };

  const handleDoubleScrollUp = () => {
    setLetterIdx((letterIdx + alphabet.length - 2) % alphabet.length);
  };

  const handleDoubleScrollDown = () => {
    setLetterIdx((letterIdx + alphabet.length + 2) % alphabet.length);
  };

  const handleSelect = (letter) => {
    const currLetter = alphabet[letterIdx].toLowerCase();
    onSelect(currLetter);
  };

  return (
    <div className="container">
      <div className="currentLetter">{alphabet[letterIdx]}</div>
      <div className="buttons">
      <div className="left-button">
        <button className="button" onClick={handleScrollUp}>
          ↑
        </button>
        <button className="button" onClick={handleDoubleScrollUp}>
          ↑↑
        </button>
      </div>
      <div className="right-button">
        <button className="button" onClick={handleScrollDown}>
          ↓
        </button>
        <button className="button" onClick={handleDoubleScrollDown}>
          ↓↓
        </button>
      </div>
      </div>
      <button className="selectButton" onClick={handleSelect}>
        +
      </button>
    </div>
  );
};

export default ScrollPicker;
