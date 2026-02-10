import {useState} from 'react';
import { TaskInput } from './TaskInput';

export function TodoCard() {
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
	return (
		<div className='todo'>
			<h3>Todo List</h3>
			{todoList.length > 0 &&
				todoList.map((task, idx) => {
					return <p key={idx}>{task}</p>;
        })}
      {showModal &&
        <TaskInput setTodoList={setTodoList} closeModal={() => setShowModal(false)}/>
      }
			<button onClick={() => setShowModal(prev => !prev)}>Add Task</button>
		</div>
	);
}
