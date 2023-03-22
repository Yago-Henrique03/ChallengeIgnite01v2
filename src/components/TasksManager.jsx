import styles from './TasksManager.module.css';
import Clipboard from '../assets/Clipboard.png';

import { Task } from './Task';


export function TasksManager ({tasks, setTasks}) {



    function deleteTask(taskToDelete){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task != taskToDelete;
        })

        setTasks(tasksWithoutDeleteOne);
    }

    function handleToggleTaskCompletion(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId)

        const newTasks = [...tasks]
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed
        setTasks(newTasks)
        console.log(taskIndex);
    }

    const tasksDone = tasks.reduce((acc, task) => {
        if(task.completed) {
            acc++
        }
        return acc
    }, 0);

    return (
        <div className={styles.content}>
            <div className={styles.TasksProgress}>
                <div>
                    <strong className={styles.createdTasks}>Tarefas Criadas</strong>
                    <p>{tasks.length}</p>
                </div>
                <div>
                    <strong className={styles.completedTasks}>Concluídas</strong>
                    <p>{`${tasksDone} de ${tasks.length}`}</p>
                </div>
            </div>

            {
                tasks.length > 0 ? (
                    <div className={styles.tasksWrapper}>
                        {tasks.map(task => <Task tasks={tasks} task={task} setTasks={setTasks} key={task.content} onDeleteTask={deleteTask} handleToggleTaskCompletion={handleToggleTaskCompletion}/>)}
                    </div>
                )
                : (
                    <div className={styles.noTasksWrapper}>
                        <img src={Clipboard} alt="Clipboard" />
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie e organize seus itens a fazer</p>
                        </div>
                    </div>
                )
            }
        </div>
        
    )
}