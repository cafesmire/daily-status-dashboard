import { useState } from 'react'

export function TaskInput({setTodoList, closeModal}) {
  const [task, setTask] = useState("");

  const saveTodo = () => {
    setTodoList(prev => prev.concat(task));
    setTask("");
    closeModal();
  }
  return (
    <dialog open>
      <input type="text" onChange={(e) => setTask(e.target.value)}/>

      <button>Save</button>
    </dialog>
  )
}