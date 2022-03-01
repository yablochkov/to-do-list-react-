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

    return (
        <>
            <input type="text"  value={item} onInput={(e) => setItem(e.target.value)}/>
                <button onClick={addTask}>Добавить</button>
                <ul> 
                </ul>
        </>
    )
}