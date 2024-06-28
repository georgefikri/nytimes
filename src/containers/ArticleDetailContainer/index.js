import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetail from '../../components/ArticleDetail';
import { fetchArticles } from '../../services/api';
import LoadingSpinner from '../../components/LoadingSpinner';
import styles from './ArticleDetailContainer.module.css';

const ArticleDetailContainer = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const articles = await fetchArticles();
      const article = articles.find((article) => article.id.toString() === id);
      setArticle(article);
    };

    loadArticle();
  }, [id]);

  return article ? (
    <div className={styles.container}>
      <ArticleDetail article={article} />
    </div>
  ) : (
    <div className={styles.loadingSpinnerContainer}>
      <LoadingSpinner />
    </div>
  );
};

export default ArticleDetailContainer;
