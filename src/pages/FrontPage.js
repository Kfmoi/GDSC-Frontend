
import TextOutputDisplay from "../components/textOutputDisplay/TextOutputDisplay";
import TextInputDisplay from "../components/textInputDisplay/TextInputDisplay";
import OutputPane from "../components/outputPane/OutputPane";

import './FrontPage.css';
const FrontPage = () => {
    return (
            <div className="main-page">
                <div className="grouper">
                    <div className="function">
                        <TextOutputDisplay />
                        <TextInputDisplay />
                    </div>
                    <div className="outputBox">
                        <OutputPane />
                    </div>
                </div>
            </div>
        );
    }
    export default FrontPage;