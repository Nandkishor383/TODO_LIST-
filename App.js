import React from 'react';

import AddTodo from './components/AddTodo/AddTodo';

import List from './components/List/List';

function App() {
  return (
    <div className="App" >
      <h3>TODO APP</h3>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
