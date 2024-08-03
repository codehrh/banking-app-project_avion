import "./Logo.css";
import '@fontsource/exo-2';
import bankLogo from "../../assets/images/dinerobankicon.png";

export default function Logo() {
    return (
        <div className="Logo">
            <h1>Dinero <span><img src={bankLogo} alt="logo"></img></span> Bank</h1>
        </div>
    )
}