
import TextOutputDisplay from "../components/textOutputDisplay/TextOutputDisplay";
import TextInputDisplay from "../components/textInputDisplay/TextInputDisplay";
import OutputPane from "../components/outputPane/OutputPane";
import React, { useState } from 'react';

import './FrontPage.css';
const FrontPage = () => {
    const [outputText, setOutputText] = useState('');

    const handleSave = (text) => {
        setOutputText((prevText) => prevText + text);
      };

    return (
            <div className="main-page">
                <div className="grouper">
                    <div className="function">
                        <TextOutputDisplay onSave={handleSave} />
                        <TextInputDisplay />
                    </div>
                    <div className="outputBox">
                        <OutputPane outputText={outputText} />
                    </div>
                </div>
            </div>
        );
    }
    export default FrontPage;