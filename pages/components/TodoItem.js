import {React, useState} from 'react'
import styles from '../../styles/Home.module.css'
import deleteData from '../api/deleteData'

function TodoItem({todo}) {
    const [isChecked, setIsChecked] = useState(false)
    const [aDelete, isDeleted] = useState("")
    const [done, isDone] = useState(true)
    const [inputData, setInputData] = useState({})

    const requestParams = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id: aDelete})
    }
    const requestParams2 = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({data: inputData, id: aDelete
      })
    }
    // console.log(todo.data.done)
     const handleDelete=()=>{
      isDeleted(todo.ref['@ref'].id)
      console.log(aDelete)
      deleteItem()
    }

    async function deleteItem(){
      console.log(done)
      await fetch ("../api/deleteData", requestParams).then(()=> deleteData())
      .catch((e)=> console.log(e))
    }

    const handlecheck = async () => {
      isDone(!todo.data.done)
      console.log(done, todo.data.done)
      isDeleted(todo.ref['@ref'].id)
      setInputData({
        ...inputData,
        done : done
      })
      await fetch("../api/updateData", requestParams2).then(()=> deleteData())
      .catch((e)=> console.log(e))
    }
    
    return (
        <div>
            <span className={styles.eachtodo}>
          <p className={styles.text}>{todo.data.task}</p>
          <div>
            <input type="checkbox" className={styles.toggle} defaultChecked={todo.data.done} onChange={handlecheck}  onClick={()=> setIsChecked(!isChecked)}/>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </span>
        </div>
    )
}

export default TodoItem
