import React from "react";
import { ReactComponent as Check } from "../../assets/img/check.svg";
import { ReactComponent as Delete } from "../../assets/img/delete.svg";
import firebase from '../../utils/firebase'
import 'firebase/firestore'

import "./Task.scss";



const db = firebase.firestore(firebase);

const Task = props => {





  const { task,setReloadTasks } = props;



  const completetask = () =>{

   db.collection("tasks")
   .doc(task.id)
   .update({
       completed: !task.completed
   })
   .then(()=>{
    setReloadTasks(true)       
   })

  }


  const deleteTask = ()=>{

db.collection('tasks')
.doc(task.id)
.delete()
.then(()=>{
    setReloadTasks(true)
})

  }


  return (
    <div className="task">
      <div>
        <Check
        className={task.completed ? "completed" : ""} 
        onClick={completetask}/>
      </div>

      <div>{task.name}</div>


      <div><Delete onClick={deleteTask} /></div>
    </div>

  

  );
};

export default Task;
