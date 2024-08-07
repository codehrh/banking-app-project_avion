import { useState } from "react";

export default function AddTask(props) {
    const {handleAddDatas, newId} = props

    const addDataHandler = (event) => {
        event.preventDefault();

        const newDataObject = {
            task_name: toDo,
            id: newId
        }
        console.log(newDataObject);
        handleAddDatas(newDataObject);
        setToDo("");
    }

    //new declaration for the new task
    const [toDo, setToDo] = useState("")
    return <div className="addData">
    <form onSubmit={addDataHandler}>
        <input value={toDo}
        placeholder="Add Task here"
        onChange={(event)=>setToDo(event.target.value)}></input>
        <button>Add Task</button>
    </form>
    </div>;
}