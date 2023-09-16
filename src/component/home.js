import React, { useEffect, useState } from "react";
import {Task} from './task'
import './header.css'


const Home = ()=>{
  const initialArray =localStorage.getItem("inputTask")?JSON.parse(localStorage.getItem("inputTask")):[]
  const [inputTask,setTask]=useState(initialArray);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
   const submithandler =(e)=>{
     e.preventDefault();
     setTask([...inputTask, {
      title:title,
      description:description
     }]);

     
    }
 const deletTask=(index)=>{
   const filterdArray = inputTask.filter((val,i)=>{
     return i!==index;  

    })
      setTask(filterdArray)
      
 
}
useEffect(() => {
  
  
  localStorage.setItem("inputTask",JSON.stringify(inputTask))
 
}, [inputTask])
 

    return(
        <div className="container">
        
         
        <form onSubmit={submithandler}>
             <input typeof="text" id="" type="text" placeholder="Titele" value={title} onChange={(e)=>setTitle(e.target.value)}/>
             <textarea onChange={(e)=>setDescription(e.target.value)}  placeholder="Write a Task" value={description}></textarea>
        
         
            <button type="submit">Add</button>
        </form>
 
 
 
       {inputTask.map((item,index)=>{
        return(

<Task key={index} title={item.title} description={item.description} deletTask={deletTask} index={index} />
        )
            

    })}
      </div>
 



    )


}

export {Home};