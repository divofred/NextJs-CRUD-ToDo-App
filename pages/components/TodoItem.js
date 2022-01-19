import {React, useState} from 'react'
import styles from '../../styles/Home.module.css'

function TodoItem({todo}) {
    const [isChecked, setIsChecked] = useState(false)
    
    // console.log(todo.data.done)
    return (
        <div>
            <span className={styles.eachtodo}>
          <p className={styles.text}>{todo.data.task}</p>
          <div>
            <input type="checkbox" className={styles.toggle} checked={isChecked} onClick={()=> setIsChecked(!isChecked)}/>
            <button>Delete</button>
          </div>
        </span>
        </div>
    )
}

export default TodoItem
