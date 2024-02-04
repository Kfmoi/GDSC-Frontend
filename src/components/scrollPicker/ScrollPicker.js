// just like for the text input display, use a useState hook for managing states
import React, { useState } from "react";
import "./ScrollPicker.css";

// main function, variable to be used as function for getting letter
const ScrollPicker = ({ onSelect }) => {
  // variable for storing charset
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = ".,?!'\":;()@$%#^&+-*/[]{}<>\\";
  const numbers = "0123456789";
  const CHARACTER_SETS = [alphabet, symbols, numbers];
  const charsetButtonSymbols = ["ABC", ".?!", "123"];

  // state hook for the state of current letter in scroll picker
  const [charIdx, setCharIdx] = useState(0);

  // state hook for the current character set being selected through
  const [charset, setCharset] = useState(0);

  // make functions for scrolling up, down, and selecting
  const handleScrollUp = () => {
    setCharIdx((charIdx + CHARACTER_SETS[charset].length - 1) % CHARACTER_SETS[charset].length);
  };

  const handleScrollDown = () => {
    setCharIdx((charIdx + CHARACTER_SETS[charset].length + 1) % CHARACTER_SETS[charset].length);
  };

  const handleDoubleScrollUp = () => {
    setCharIdx((charIdx + CHARACTER_SETS[charset].length - 2) % CHARACTER_SETS[charset].length);
  };

  const handleDoubleScrollDown = () => {
    setCharIdx((charIdx + CHARACTER_SETS[charset].length + 2) % CHARACTER_SETS[charset].length);
  };

  const handleSelect = () => {
    onSelect(CHARACTER_SETS[charset][charIdx].toLowerCase());
  };

  const handleCharMode = () => {
    setCharIdx(0);
    setCharset((charset + CHARACTER_SETS.length + 1) % CHARACTER_SETS.length);
  }

  return (
    <div className="container">
      <div className="buttons">
      <div className="left-button">
      <button className="button" onClick={handleDoubleScrollUp}>
          ↑↑
        </button>
        <button className="button" onClick={handleScrollUp}>
          ↑
        </button>
      </div>
      <div className="currentLetter">{CHARACTER_SETS[charset][charIdx]}</div>
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
