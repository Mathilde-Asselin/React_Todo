import React, { useState, useEffect } from 'react';

//On définit les consts
export default function Count() {
    const [todo, setTodo] =  useState('')
    const [todolist, setTodolist] =  useState([])
    const [lastitem, setLastitem] = useState(null)

    //Affiche dans la console 
    useEffect(() => {
        localStorage.setItem("todos", todolist)
    }, [todolist])

    //Change le dernier item en rouge 
    useEffect(() => {
        setLastitem(todolist.length - 1);
    }, [todolist])

    return (
        <div>
            <h1>To do :</h1>
            { todolist.map((item, index) => {
                return (
                    //Condition ternaire pour changer la couleur 
                    <p style={{color : index === lastitem ? '#FF0000' : '#000000'}} key={index}>{item}</p>
                )
            })}
            <input type="text" onChange={event => setTodo(event.target.value)} value={todo}/>
            <button onClick={() => (setTodolist(todolist => [...todolist, todo]), setTodo(''))}>Add Todo</button>
        </div>
    )
}