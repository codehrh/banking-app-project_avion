import "./BudgetApp.css";

export default function BudgetApp () {
    return(
        <div className="budgetApp">
            <div classname="balance">
                00000000
            </div>
            <div classname="recentTransactions">
                <ul className="transactionList">
                    <li>transaction 3</li>
                    <li>transaction 2</li>
                    <li>transaction 1</li>
                </ul>
            </div>
        </div>
    )
}