import { Trash } from 'phosphor-react';
import styles from './Task.module.css';


export function Task({ task, tasks, setTasks, onDeleteTask, handleToggleTaskCompletion }) {

    function handleDeleteTask() {
        onDeleteTask(task);
    }


    return (
        <div className={styles.task}>
            <div>
                <input type="checkbox" className={styles.checkbox} checked={task.completed} onChange={() => handleToggleTaskCompletion(task.id)}/>
                <p>{task.content}</p>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={24}/>
            </button>
        </div>
    )
}
