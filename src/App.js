import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route component={Header} />
      <Main />
    </Router>
  );
}

export default App;
