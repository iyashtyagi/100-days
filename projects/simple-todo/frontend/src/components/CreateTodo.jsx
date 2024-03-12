import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input id="title" onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="title"/> <br />
            <input id="description" onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="description"/><br />
            <button onClick={()=>{fetch("http://localhost:3000/todo", {
                method : "post",
                headers : {
                    "content-Type" : "application/json"
                },
                body :  JSON.stringify({
                    title : title,
                    description : description
                })
            })}}>Add a todo</button>
        </div>
    )
}