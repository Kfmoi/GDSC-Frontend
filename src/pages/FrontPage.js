
import TextOutputDisplay from "../components/textOutputDisplay/TextOutputDisplay";
import TextInputDisplay from "../components/textInputDisplay/TextInputDisplay";
import OutputPane from "../components/outputPane/OutputPane";

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
            <div className="output">
                <OutputPane />
            </div>
        </div>
    );
    }
    export default FrontPage;