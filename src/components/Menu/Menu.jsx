import "./Menu.css";

export default function Menu () {
    return (
        <div className="Menu">
            <ul className="menuList">
                <li className="listItem" id="home">Home</li>
                <li className="listItem" id="addClient">Add Client</li>
                <li className="listItem" id="clientList">Client List</li>
                <li className="listItem" id="transactions">Transactions</li>
                <li className="listItem" id="favorite">Favorite</li>
            </ul>
        </div>
    )
};