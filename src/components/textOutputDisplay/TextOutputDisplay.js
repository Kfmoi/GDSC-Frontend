import "./TextOutputDisplay.css";
const TextOutputDisplay = ({ onSave, text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <div className="output">
        <div className="column-display">
          <input
            className="input-text"
            type="text"
            value={text}
            placeholder="Autocomplete Text"
            readOnly
          />
          <div className="output-buttons">
            <button onClick={() => onSave(text)} className="output-button">Save</button>
            <button onClick={handleCopy} className="output-button">Copy</button>
            <button className="output-button">C</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextOutputDisplay;
