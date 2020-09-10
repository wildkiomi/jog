import React from 'react';
import 'App.css';
import Main from 'components/Main';
import Header from 'components/Header';
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
