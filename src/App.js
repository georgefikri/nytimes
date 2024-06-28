import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleListContainer from './containers/ArticleListContainer';
import ArticleDetailContainer from './containers/ArticleDetailContainer';
import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<ArticleListContainer />} />
        <Route path="/article/:id" element={<ArticleDetailContainer />} />
      </Routes>
    </div>
  </Router>
);

export default App;
