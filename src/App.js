import './App.css';
import bankLogo from "./assets/images/dinerobank.png";
import SearchBar from "./components/SearchBar/SearchBar";
import User from "./components/User/User.jsx";
import Logo from "./components/Logo/Logo.jsx";
import bankUsers from "./assets/data/bankUsers.json";
import Menu from "./components/Menu/Menu.jsx";
import BudgetApp from "./components/BudgetApp/BudgetApp.jsx";
import { useState } from 'react';
import task from "./assets/task-list.json";
import AddTask from "./components/AddTask.jsx";

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

  //useState

  // array destructuring
  // [value/variable, function to update the value/variable]
  // useState can accept different data types (string, number, or array)
  // right now the useState gets the string from the user input

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // holder of result

  const [result, setResult] = useState("");

  // setNumx mimics
  // const setNum1 = function () {}

  // handle the change state of num1
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
    console.log(num1);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
    console.log(num1);
  };

  const handleAddition = () => {
    let add = Number(num1) + Number(num2);
    setResult(add);
  }

  const handleSubtraction = () => {
    let minus = Number(num1) - Number(num2);
    setResult(minus);
  }

  const handleMultiplication = () => {
    let multiply = Number(num1) * Number(num2);
    setResult(multiply);
  }

  const handleDivision = () => {
    let divide = Number(num1) / Number(num2);
    setResult(divide);
  }

  const[datas, setDatas] = useState(task)
  // datas.push(newData)
  const handleDatas = (newData) => {
    // [...prevData] - creates a new array that contains the prev data and newly created task and gives back to data state
    //spread operator
    setDatas((prevData) => [...prevData, newData]);
  };


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
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <label>Num 1:</label>
        <input type="number" onChange={handleNum1Change}></input>
        <label>Num 2:</label>
        <input type="number" onChange={handleNum2Change}></input>
        <br />
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
        <h1>Result: {result}</h1>
      </div>
      <div className="dataList">
        {datas.map((x) => {
          return <div key={x.id}>{x.task_name}</div>;
        })}
      </div>
      <AddTask handleAddDatas={handleDatas} newId={datas.length}></AddTask>
    </body>
  );
}
