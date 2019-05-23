import React from 'react';
import './App.css';

import ListEmployeesContainer from './containers/ListEmployeesContainer';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-3"> Prueba </h1>
      <ListEmployeesContainer />
    </div>
  );
}

export default App;
