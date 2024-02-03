import './TextOutputDisplay.css';
const TextOutputDisplay = ({onChange, text}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };
    return (
        <div className="output">
            <input className="input-text" type = "text" value={text} readOnly placeholder='Autocomplete Text' />
            <button className='copy' onClick={handleCopy}>Copy to clipboard</button>
        </div>
    );
    }
    export default TextOutputDisplay;