import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';

function App() {
    return (
        <div>
            <h2>Temperature Converter</h2>
            <TemperatureConverter />

            <h2>Todo List</h2>
            <TodoList />
        </div>
    );
}

export default App;
