import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (taskName && taskDescription && taskDate) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        completed: false,
      };
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setTaskName('');
      setTaskDescription('');
      setTaskDate('');
    }
  };

  const handleEditTask = (index) => {
    setTaskName(tasks[index].name);
    setTaskDescription(tasks[index].description);
    setTaskDate(tasks[index].date);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>To Do List</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          style={styles.input}
          type="datetime-local"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <button style={styles.button} onClick={handleAddTask}>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
      <h3 style={styles.footer}>Total Completed Tasks: {tasks.filter(task => task.completed).length}</h3>
    </div>
  );
}

const styles = {
  container: { padding: '20px', maxWidth: '600px', margin: 'auto' },
  header: { textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  input: { padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' },
  footer: { textAlign: 'center', marginTop: '20px', fontSize: '18px' },
};

export default App;
