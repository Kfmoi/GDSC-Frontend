import TextInputDisplay from "../components/TextInputDisplay";
import TextOutputDisplay from "../components/TextOutputDisplay.js/TextOutputDisplay";
import './FrontPage.css';
const FrontPage = () => {
    return (
        <div className="main-page">
            <div className="title">
                <h1>Text Editor</h1>
            </div>
            <div className="function">
                <TextOutputDisplay />
                <TextInputDisplay />
            </div>
        </div>
    );
    }
    export default FrontPage;