import { Header } from './components/Header';
import { TaskAdd } from './components/TaskAdd';
import { TasksManager } from './components/TasksManager';

import styles from './App.module.css';

import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');


  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <TaskAdd setTasks={setTasks} tasks={tasks} setNewTask={setNewTask} newTask={newTask}/>
        <TasksManager tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
  
}

export default App
