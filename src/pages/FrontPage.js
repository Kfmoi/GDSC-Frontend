
import TextOutputDisplay from "../components/textOutputDisplay/TextOutputDisplay";
import TextInputDisplay from "../components/textInputDisplay/TextInputDisplay";
import OutputPane from "../components/outputPane/OutputPane";
import React, { useState } from 'react';

import './FrontPage.css';
const FrontPage = () => {

    const [outputText, setOutputText] = useState('');

    // Handles the save button from the TextOutputDisplay component
    const handleSave = (text) => {
        if (text !== undefined && text !== null) {
            setOutputText((prevText) => prevText + text);
          }
      };

    // Handles the clear button from the OutputPane component
    const handleClear = () => {
        setOutputText('');
    };

    const handleBackspace = () => {
        if (outputText.length === 0) {
            return;
        }
        setOutputText(outputText.slice(0, outputText.length-1));
    };

    const handleSuperBackspace = () => {
        if (outputText.length === 0) {
            return;
        }
        var alnum = ((outputText[outputText.length - 1] >= 'a' && outputText[outputText.length - 1] <= 'z') ||
            (outputText[outputText.length - 1] >= 'A' && outputText[outputText.length - 1] <= 'Z') ||
            (outputText[outputText.length - 1] >= '0' && outputText[outputText.length - 1] <= '9'));
        for (let i = outputText.length - 1; i >= 0; i--) {
            if ((alnum && !((outputText[i] >= 'a' && outputText[i] <= 'z') || (outputText[i] >= 'A' && outputText[i] <= 'Z') || (outputText[i] >= '0' && outputText[i] <= '9'))) ||
                (!alnum && ((outputText[i] >= 'a' && outputText[i] <= 'z') || (outputText[i] >= 'A' && outputText[i] <= 'Z') || (outputText[i] >= '0' && outputText[i] <= '9')))) {
                setOutputText(outputText.slice(0, i + 1).trim());
                return;
            }
        }
        setOutputText('');
    };

    const handleSpace = () => {
        setOutputText(outputText + ' ');
    }

    return (
            <div className="main-page">
                <div className="grouper">
                    <div className="function">
                        <TextOutputDisplay onSave={handleSave} />
                        <TextInputDisplay onSave={handleSave}/>
                    </div>
                    <div className="outputBox">
                        <OutputPane outputText={outputText} onClear={handleClear} onBackspace={handleBackspace}
                        onSuperBackspace={handleSuperBackspace} onSpace={handleSpace}/>
                    </div>
                </div>
            </div>
        );
    }
    export default FrontPage;