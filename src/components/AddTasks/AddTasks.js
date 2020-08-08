import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTasks.scss";
import {ReactComponent as Send} from '../../assets/img/send.svg'
import {isEmpty} from 'lodash'
import firebase from '../../utils/firebase'
import 'firebase/firestore'


const db = firebase.firestore(firebase)


const AddTasks = (props) => {


const {setReloadTasks} = props;
const [task, setTask] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(!isEmpty(task)){

      db.collection("tasks")
      .add({
        name: task,
        completed: false
      })
      .then(()=>{

        setTask("")
setReloadTasks(true)        
      })


    }



    
  };







  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input type="text" placeholder="Nueva Tarea..." onChange={(e)=>setTask(e.target.value)} value={task}/>

      <Button type="submit">


         <Send />
      </Button>
    </Form>
  );
};

export default AddTasks;
