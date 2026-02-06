import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        const response = await axios.post(`${API_URL}/api/todos`, { task: inputValue });
        setTodos([response.data, ...todos]);
        setInputValue('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/api/todos/${id}`, { completed: !completed });
      setTodos(todos.map(todo => 
        todo.id === id ? response.data : todo
      ));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await axios.delete(`${API_URL}/api/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>📝 Todo Master</h1>
          <p>Organize your life, one task at a time</p>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <div className="stats">
            <span className="total-todos">Total: {todos.length}</span>
            <span className="completed-todos">Completed: {todos.filter(t => t.completed).length}</span>
          </div>
          
          <form onSubmit={addTodo} className="todo-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done today?"
              className="todo-input"
            />
            <button type="submit" className="add-btn">
              <span>➕ Add Task</span>
            </button>
          </form>

          <div className="todo-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🎯</div>
                <p className="no-todos">No tasks yet! Start by adding your first todo above.</p>
              </div>
            ) : (
              todos.map(todo => (
                <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id, todo.completed)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{todo.task}</span>
                  <button 
                    onClick={() => deleteTodo(todo.id)} 
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>💪 Stay productive | Made with ❤️ | © 2026 Todo Master</p>
        </div>
      </footer>
    </div>
  );
}

export default App;