
import './OutputPane.css';

const OutputPane = ({ outputText }) => {


    return (
        <div className="outputBox">
            <button className="clear">Clear all text</button>
            <button className="copy">Copy to clipboard</button>
            <textarea className="outputTextBox" type = "text" value={outputText} 
                readOnly placeholder='Output Text' rows={12} wrap='soft' cols={35}/>
            <div className='backspace'>
                <button className="back">Backspace</button>
                <button className="super-back">Super Backspace</button>
            </div>
            <button className="copy">Space</button>
        </div>
    );
};

export default OutputPane;
