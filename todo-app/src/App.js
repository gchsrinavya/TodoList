import React from 'react';
import TodoList from './components/TodoList';
import './App.css';  // Ensure this is imported for styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
      </header>
      <section className="App-content">
        <TodoList />
      </section>
      <footer className="App-footer">
        <p>Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
