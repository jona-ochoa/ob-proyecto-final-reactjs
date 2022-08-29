import React, { useState } from "react";

/**
 * Componente que gestiona la lista de tareas
 * 
 * @returns {React.Component}
 */

function TaskList() {

  const [newTask, setNewTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  /**
   * Añade una nueva tarea a la lista de tareas
   */

  const addNewTask = () => {
    setTasklist([...tasklist, { task: newTask, completed: false }]);
    setNewTask('');
    return true;
  };

  /**
   * Función para chequear si la lista de tareas está vacía
   * @returns true si tasklist.length === 0
   */

  const isTasksEmpty = () => tasklist.length === 0;

  /**
   * Editar el nombre de la nueva tarea
   * @param {*} e - Evento de onChanche proveniente de React
   */

  const editNewItem = (e) => setNewTask(e.target.value);

  /**
   * Funcion para eliminar una tarea en concreto
   * @param {*} index - Indice de la tarea a eliminar
   */

  const removeItem = (index) => {
    const newtasklist = tasklist.filter((t, i) => i !== index);
    setTasklist(newtasklist);
  };

  const toggleCompleteItem = (index) => {
    let newTaskList = tasklist;
    newTaskList[index].completed = !newTaskList[index].completed;
    setTasklist([...newTaskList]);
  };

  const insertNewItemOnEnterKey = (e) => e.key === "Enter" && addNewTask();

  return (
	<>
	<h1>Task List</h1>
	<div>
	  <input
		className="input"
		value={newTask}
		onKeyDown={insertNewItemOnEnterKey}
		onChange={editNewItem}
		placeholder="New Task"
		type="text"
	  />
	  <button className="btn" onClick={addNewTask}>
		Create Task
	  </button>
	</div>
	{isTasksEmpty() ? (
	  <p>Task List is Empty</p>
	) : (
	  <ul>
		{tasklist.map((item, index) => (
		  <li key={index}>
			<input
			  type="checkbox"
			//   onClick={() => removeItem(index)}
			  onClick={() => toggleCompleteItem(index)}
			  checked={item.completed}
			  onChange={() => {editNewItem}}
			/>
			{item.task}
		  </li>
		))}
	  </ul>
	)}
  </>
  );
}

export default TaskList;
