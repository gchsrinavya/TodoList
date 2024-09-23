import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);  // Start with an empty array
  const [text, setText] = useState('');

  function addTask() {
    if (text.trim()) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
      setText('');
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="todo-list">
      <h2>Your Tasks</h2>
      <div className="task-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>

      <div className="add-task">
        <input
          className="task-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="add-task-button" onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
