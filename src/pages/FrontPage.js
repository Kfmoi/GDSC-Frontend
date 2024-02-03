import TextInputDisplay from "../components/TextInputDisplay";
import './FrontPage.css';
const FrontPage = () => {
    return (
        <div className="main-page">
            <div className="title">
                <h1>Text Editor</h1>
            </div>
            <div className="function">
                <TextInputDisplay />
            </div>
        </div>
    );
    }
    export default FrontPage;