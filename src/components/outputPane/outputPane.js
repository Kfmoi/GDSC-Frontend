import React, { useState } from 'react';

import './OutputPane.css';

const OutputPane = ({outputText}) => {

    const [text, setText] = useState('Hi, how are you?');
    
    const handleClear = () => {
        setText('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleBackspace = () => {
        setText(text.slice(0, text.length-1));
    };

    const handleSuperBackspace = () => {
        // remove the last word
        if (text.length === 0) return;

        for (let i = text.length - 1; i >= 0; i--) {
            if (!((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= '0' && text[i] <= '9'))) {
                setText(text.slice(0, i));
                return;
            }
        }
        setText("");
    };

    const handleSpace = () => {
        setText(text + ' ');
    }

    return (
        <div className="outputBox">
            <button className="clear" onClick={handleClear}>Clear all text</button>
            <button className="copy" onClick={handleCopy}>Copy to clipboard</button>
            <textarea className="outputTextBox" type = "text" value={outputText} 
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
