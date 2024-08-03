import './App.css';
import bankLogo from "./assets/images/dinerobank.png";
import SearchBar from "./components/SearchBar/SearchBar";
import User from "./components/User/User.jsx";
import Logo from "./components/Logo/Logo.jsx";
import bankUsers from "./assets/data/bankUsers.json";
import Menu from "./components/Menu/Menu.jsx";
import BudgetApp from "./components/BudgetApp/BudgetApp.jsx";

export default function App() {
  const bankEmployee = {
    name: "Yael",
    email: "spongecola@gmail.com",
    balance: 10000,
  };

  const address = {
    houseNo: 74,
    street: "Manila Street",
    country: "Philippines"
  }

  return (
    <body>
      <div className="App">
        <div className="nav">
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

          {/* <User employee={bankEmployee} address={address}></User>
          {bankUsers.map((bankUsers) => {
            return (
              <div key={bankUsers.id}>
                {bankUsers.name} {bankUsers.balance}
              </div>
            );
          })} */}
        </div>
      </div>
    </body>

  );
}
