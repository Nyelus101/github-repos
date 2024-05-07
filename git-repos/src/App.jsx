// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoDetail from './components/RepoDetail';
import RepoList from './components/RepoList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={RepoList} />
        <Route path="/repositories/:repoName" component={RepoDetail} />
      </Routes>
    </Router>
  );
};

export default App;
