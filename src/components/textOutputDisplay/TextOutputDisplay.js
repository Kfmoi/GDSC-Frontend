import "./TextOutputDisplay.css";
const TextOutputDisplay = ({ onChange, text }) => {
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
            readOnly
            placeholder="Autocomplete Text"
          />
          <div className="output-buttons">
            <button className="output-button">A</button>
            <button className="output-button">B</button>
            <button className="output-button">C</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextOutputDisplay;
