import React, { useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
