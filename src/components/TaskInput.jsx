import { useState } from "react";

export function TaskInput({ setTodoList, closeModal }) {
  const [task, setTask] = useState("");

  const saveTodo = () => {
    setTodoList((prev) => prev.concat({ id: self.crypto.randomUUID(), task }));
    setTask("");
    closeModal();

  };
  return (
    <>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <dialog open className='flex w-full h-full justify-center items-center bg-transparent p-5 gap-5'>
        <input type="text" className='w-full' onChange={(e) => setTask(e.target.value)} />
        <button onClick={saveTodo}>Save</button>
      </dialog>
    </>
  );
}
