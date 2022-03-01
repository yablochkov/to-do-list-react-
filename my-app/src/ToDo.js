import { useEffect, useState } from "react";

export function ToDo(){
    let [item, setItem] = useState("");
    let [todos, setTodos] = useState([
        {name:'task', state: false}
      ]);
      const addTask = () => {
          let arr = [...todos];
          arr.push({name: item, state: false})
          setTodos(arr);
          setItem('')
      } 

      const taskComplete = (index) => {
        let arr = [...todos];
        arr[index].state = !arr[index].state
        setTodos(arr)
        console.log(todos);
    }

    const deleteTask = (index)=> {
        let arr = [...todos];
        arr.splice(index, 1)
        setTodos(arr)
        console.log(todos);
    }


    return (
        <>
            <input type="text"  value={item} onInput={(e) => setItem(e.target.value)}/>
                <button onClick={addTask}>Добавить</button>
                <ul> 
                {todos.map((i,index) => {
                return <li key = {index}>
                    <input type="checkbox" checked={i.state} onChange={()=>{taskComplete(index)}}></input>{i.name}
                    <button onClick={()=> {deleteTask(index)}}>Удалить</button></li>
            })}
                </ul>
        </>
    )
}