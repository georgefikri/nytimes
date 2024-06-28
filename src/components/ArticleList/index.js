import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles }) => (
  <div className={styles.articleList}>
    <h1 className={styles.heading}>Most Popular Articles</h1>
    <ul className={styles.list}>
      {articles.map((article) => (
        <li key={article.id} className={styles.listItem}>
          <Link to={`/article/${article.id}`} className={styles.link}>
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleList;
