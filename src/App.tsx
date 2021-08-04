import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComponent from './components/FuncComponents';
import ClassComponet from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponet email="test@test.com"></ClassComponet>
        <FuncComponent name="John" age={true} items={[]}></FuncComponent>
        <FuncComponent name="John" age={true} items={[]} bff={{name: "test", surname: "test"}} parent={34} test="testing"></FuncComponent>
      </header>
    </div>
  );
}

export default App;
