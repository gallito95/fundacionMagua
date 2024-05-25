import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const blogPost = ({ _id, title, summary, content, cover, createdAt, author }) => {
  // Funktion, um die ersten 100 Wörter eines Textes zu extrahieren
  const maxSummary = (text) => {
    const words = text.split(' ');
    const truncatedText = words.slice(0, 50).join(' ');
    return truncatedText + (words.length > 50 ? '...' : ''); // Füge "..." hinzu, wenn mehr als 100 Wörter vorhanden sind
  };

  const truncatedSummary = maxSummary
  (summary);

  return (
    <div className="post">
      <div className="image">
        <Link to={`/projects/post/${_id}`}>
          <img src={'http://localhost:4000/' + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/projects/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.Username}
          </a>
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">{truncatedSummary}</p>
      </div>
    </div>
  );
};

export default blogPost;