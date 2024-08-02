import './App.css';
import bankLogo from "./assets/images/dinerobank.png";
import SearchBar from "./components/SearchBar/SearchBar";
import User from "./components/User/User.jsx";

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
    <div className="App">
      <h1>Hello World</h1>
      <img src={bankLogo} alt="logo"></img>
      <SearchBar></SearchBar>
      <User employee={bankEmployee} address={address}></User>
    </div>
  );
}
