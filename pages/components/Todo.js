import {React, useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import TodoItem from "./TodoItem";
import useSWR from "swr"

function Todo() {
  const { data:todos, mutate }=useSWR("../api/todos")
  const [newtodo, setnewtodo] = useState('')

const handleinput =(e)=>{
  setnewtodo(e.target.value)
}

  const HandleSubmit =(e)=>{
    console.log(newtodo)
    setnewtodo('')
  }

  
  return (
  
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input type="text" value={newtodo} onChange={(e)=>handleinput(e)}></input>
          <button onClick={()=>HandleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        {/* <span className={styles.eachtodo}>
          <p className={styles.text}>Go to church</p>
          <div>
            <input type="checkbox" className={styles.toggle} checked={true}/>
            <button>Delete</button>
          </div>
        </span>
        <span className={styles.eachtodo}>
          <p>Play football</p>
          <div>
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </span>
        <span className={styles.eachtodo}>
          <p>cook supper</p>
          <div>
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </span>
        <span className={styles.eachtodo}>
          <p>Speak to Braide</p>
          <div>
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </span>
        <span className={styles.eachtodo}>
          <p>Hang out with miracle</p>
          <div>
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </span> */}
        {todos &&
   todos.map((todo) => (
     <TodoItem
       key={todo.id}
       todo={todo}
       todoDeleted={mutate}
     />
   ))
 }
      </div>
    </div>
  );
}

export default Todo;
