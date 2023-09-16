import React from "react";
const Task=({title,description,deletTask,index})=>{
    return(
        <div className="task">
    <div>

        <p>{title}</p>
        <span>{description}</span>         
    </div>

        <button onClick={()=>deletTask(index)}> - </button>         
        </div>

    )
}

export {Task};