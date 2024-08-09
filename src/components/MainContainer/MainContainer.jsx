import SearchBar from "../SearchBar/SearchBar.jsx";
import Logo from "../Logo/Logo.jsx";
import Menu from "../Menu/Menu.jsx";
import BudgetApp from "../BudgetApp/BudgetApp.jsx";

export default function MainContainer() {
    return (
        <div className="MainContainer">   <div className="nav">
            <div className="leftnav">
                <Logo></Logo>
            </div>
            <div className="rightnav">
                <SearchBar></SearchBar>
            </div>
        </div>

            <div className="mainContainer">
                <div className="leftContainer">
                    <Menu></Menu>
                </div>
                <div className="rightContainer">
                    <BudgetApp></BudgetApp>
                </div>
            </div>
        </div>
    )
}