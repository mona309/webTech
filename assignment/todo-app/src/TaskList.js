import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          style={task.completed ? { ...styles.task, ...styles.completedTask } : styles.task}
        >
          <h2>{task.name}</h2>
          <p>{task.description}</p>
          <p>{new Date(task.date).toLocaleString()}</p>
          <p>Status: {task.completed ? 'Completed' : 'Scheduled'}</p>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />completed
            <button style={styles.editButton} onClick={() => onEdit(index)}>Edit</button>
            <button style={styles.deleteButton} onClick={() => onDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  task: { border: '3px solid #35ab', padding: '10px', margin: '10px 0', borderRadius: '10px' ,background: '#abdbe3',align_items:'center',align_text:'center',},
  completedTask: { color: 'red', textDecoration: 'line-through' },
  editButton: { marginRight: '30px', marginLeft: '30px', cursor: 'pointer', color: 'yellow', background: '#000',height:'30px',width:'100px'},
  deleteButton: { cursor: 'pointer', color: 'white' ,background: '#000',height:'30px',width:'100px'},
};

export default TaskList;
