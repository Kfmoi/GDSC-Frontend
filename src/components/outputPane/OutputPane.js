import React, { useState, useEffect } from "react";
import './OutputPane.css';

const OutputPane = ({ outputText, onClear }) => {
    const [text, setText] = useState(outputText);

    // useEffect function is called whenever the outputText changes
    useEffect(() => {
        setText(outputText);
    }, [outputText]);

    const handleClear = () => {
        setText('');
        onClear(); // Calls the onClear function from the FrontPage component
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleBackspace = () => {
        if (text.length === 0) {
            return;
        }
        setText(text.slice(0, text.length-1));
    };

    const handleSuperBackspace = () => {
        if (text.length === 0) {
            return;
        }
        var alnum = ((text[text.length - 1] >= 'a' && text[text.length - 1] <= 'z') ||
            (text[text.length - 1] >= 'A' && text[text.length - 1] <= 'Z') ||
            (text[text.length - 1] >= '0' && text[text.length - 1] <= '9'));
        for (let i = text.length - 1; i >= 0; i--) {
            if ((alnum && !((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= '0' && text[i] <= '9'))) ||
                (!alnum && ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= '0' && text[i] <= '9')))) {
                setText(text.slice(0, i + 1).trim());
                return;
            }
        }
        setText('');
    };

    const handleSpace = () => {
        setText(text + ' ');
    }

    return (
        <div className="outputBox">
            <button className="clear" onClick={handleClear}>Clear all text</button>
            <button className="copy" onClick={handleCopy}>Copy to clipboard</button>
            <textarea className="outputTextBox" type = "text" value={text}
                readOnly placeholder='Output Text' rows={12} wrap='soft' cols={35}/>
            <div className='backspace'>
                <button className="back" onClick={handleBackspace}>Backspace</button>
                <button className="super-back" onClick={handleSuperBackspace}>Super Backspace</button>
            </div>
            <button className="copy" onClick={handleSpace}>Space</button>
        </div>
    );
};

export default OutputPane;
