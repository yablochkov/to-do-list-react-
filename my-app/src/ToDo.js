import { useEffect, useState } from "react";

export function ToDo(){
  

    return (
        <>
            <input type="text"  value={item} onInput={(e) => setItem(e.target.value)}/>
                <button onClick={addTask}>Добавить</button>
                <ul> 
                </ul>
        </>
    )
}