import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoItem(props) {

  return (
    <div>
      {props.task}
      <button onClick={() => props.deleteTask(props.id)} style={{ marginLeft: '20px' }}>delete</button>
    </div>
  );
}

function TodoForm(props) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {

    setValue(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    props.addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} required />
      <button type="submit"> Add list </button>
    </form>
  );
}

function TodoList() {

  const [tasks, setTasks] = useState([
    // The state of the tasks
    { id: 1, task: "welldone" },
    { id: 2, task: "like" },
    { id: 3, task: "Have fun" },
  ]);

  const addTask = (task) => {

    const newTask = { id: Math.random(), task: task };
    setTasks(tasks.concat(newTask));
  };

  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1> To-Do List</h1>

      {tasks.map((task) => (

        <table style={{ marginLeft: '45%' }}>
          <tr>
            <th>
              <TodoItem
                key={task.id}
                id={task.id}
                task={task.task}
                deleteTask={deleteTask}
              />
            </th>
          </tr>
        </table>
      ))}

      <TodoForm addTask={addTask} />
    </div>
  );
}
// function List() {
//   const [value, setValue] = useState('');
//   const [list, setlist] = useState([
//     {}
//   ]);
//   const addList = () => {
//     if (value.trim() !== '') {
//       setlist([...list, value]);
//       setValue('');
//     }

//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)} />
//       <button onClick={addList}>addlist</button>
      // <h2>List of Items</h2>
      // <ul>
      // {list.map((l, index) => (
      //     <li key={index}>
      //       {l}
      //       <button onClick={() => deleleItem(index)}>Delele</button>
      //     </li>

      // ))}
      // </ul> 
//     </div>
//   );

// }

// export default List;
export default TodoList;
