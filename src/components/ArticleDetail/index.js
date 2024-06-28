import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticleDetail.module.css';

const ArticleDetail = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.articleDetail}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Back
      </button>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.abstract}>{article.abstract}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Read more
      </a>
    </div>
  );
};

export default ArticleDetail;