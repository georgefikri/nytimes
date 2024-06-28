import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleList;
