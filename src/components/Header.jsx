import styles from './Header.module.css';
import toDo from '../assets/Ignite-Todo.svg';

export function Header() {
    return (
        <header>
            <img src={toDo}/>
        </header>
    )
}

