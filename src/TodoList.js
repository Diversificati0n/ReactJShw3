import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="New Task"
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <Button onClick={handleAddTask} variant="contained">Add Task</Button>
            </Stack>

            {tasks.map((task, index) => (
                <Card key={index} style={{ margin: '10px 0', padding: '10px' }}>
                    {task}
                    <IconButton onClick={() => handleDeleteTask(index)}><DeleteIcon /></IconButton>
                </Card>
            ))}
        </div>
    );
};

export default TodoList;
