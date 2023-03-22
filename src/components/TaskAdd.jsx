import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './TaskAdd.module.css';


export function TaskAdd({ setTasks, tasks, newTask, setNewTask}) {

    function handleCreateNewTask(){
        event.preventDefault();
        
        setTasks(tasks => [...tasks, {id: event.target.task.value, content: event.target.task.value, completed: false}]);

        setNewTask('');
    }

    function handleNewTask() {
        setNewTask(event.target.value);

    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" name="task" value={newTask} onChange={handleNewTask} />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    )
}