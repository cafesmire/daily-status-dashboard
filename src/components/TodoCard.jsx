import { useState } from 'react';
import { TaskInput } from './TaskInput';

export function TodoCard() {
	const [todoList, setTodoList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const deleteTask = (id) => {
		setTodoList(prev => prev.filter(todo => todo?.id !== id))
	};

	return (
		<div className="todo relative">
			<h3>Todo List</h3>
			{todoList.length > 0 &&
				todoList.map((todo) => {
					return (
						<div key={todo?.id} className='flex justify-around items-center border-y p-5'>
							<p>{todo?.task}</p>
							<button onClick={() => deleteTask(todo?.id)}>&times;</button>
						</div>
					);
				})}
			{showModal ?
				<TaskInput
					setTodoList={setTodoList}
					closeModal={() => setShowModal(false)}
				/>
				:
				<button onClick={() => setShowModal((prev) => !prev)}>Add Task</button>
			}
		</div>
	);
}
