import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../services/api';
import ArticleList from '../../components/ArticleList';
import styles from './ArticleListContainer.module.css';

const ArticleListContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles();
      setArticles(articles);
    };

    loadArticles();
  }, []);

  return (
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticleListContainer;
