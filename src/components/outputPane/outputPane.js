
import './OutputPane.css';

const OutputPane = () => {

    const [text, setText] = useState('');
    
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
    };

    const handleSpace = () => {
        setText(text + ' ');
    }

    return (
        <div className="outputBox">
            <button className="clear">Clear all text</button>
            <button className="copy">Copy to clipboard</button>
            <textarea className="outputTextBox" type = "text" value={text} 
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
